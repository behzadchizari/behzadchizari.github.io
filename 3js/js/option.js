//properties
var _xSpeed = 0;
var _ySpeed = 0;
var _zSpeed = 0;

var _xSize = 0;
var _ySize = 0;
var _zSize = 0;
var _color = "";

var geometry;
var material;
var scene;
var _cube;

var camera;
var renderer;

//On Load
function onLoad() {
    this.initial();
    this.makeCude();
    this.setCamera();
    this.setCanvas();
    this.animate();
  }
//init properties
  function initial() {
    this._xSpeed = 0.01;
    this._ySpeed = 0.01;
    this._zSpeed = 0.01;

    this._xSize = 1;
    this._ySize = 1;
    this._zSize = 1;

    this._color = 0x00ff00;
  }
//camera
  function setCamera() {
    this.camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.8,2000);
    this.camera.position.z = 5;
  }
//canvas element
  function setCanvas() {
    this.renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("canvas").appendChild(renderer.domElement);
  }

  //make Cube
  function makeCude() {
    this.geometry = new THREE.BoxGeometry(
      this._xSize,
      this._ySize,
      this._zSize
    );
    this.material = new THREE.MeshBasicMaterial({
      color: this._color
    });
    this.scene = new THREE.Scene();
    this._cube = new THREE.Mesh(geometry, material);
    this.scene.add(this._cube);
  }

  //Animate
  function animate() {
    requestAnimationFrame(animate);
    if (this._cube !== undefined) {
      this._cube.rotation.x += this._xSpeed;
      this._cube.rotation.y += this._ySpeed;
      this._cube.rotation.z += this._zSpeed;
    }
    renderer.render(scene, camera);
  };
  
  //change SIZE
  function xSizekeyup(xSize) {
    if (!xSize.isNan) {
      this._xSize = Number(xSize);
    }
    this.makeCude();
  }
  function ySizekeyup(ySize) {
    if (!ySize.isNan) {
      this._ySize = Number(ySize);
    }
    this.makeCude();
  }
  function zSizekeyup(zSize) {
    if (!zSize.isNan) {
      this._zSize = Number(zSize);
    }
    this.makeCude();
  }

  //change CAMERA POSIOTION
  function zkeyup(z) {
       
    if (!z.isNan) {
      camera.position.z = Number(z);
    } else {
      camera.position.z = 5;
    }
  }

  //change ROTATION SPEED
  
  function xSpeedkeyup(xSpeed) {
    if (!xSpeed.isNan) {
      var t = Number(xSpeed) / 100;
      this._xSpeed = t;
    }
  }
  function ySpeedkeyup(ySpeed) {
    if (!ySpeed.isNan) {
      var t = Number(ySpeed) / 100;
      this._ySpeed = t;
    }
  }
  function zSpeedkeyup(zSpeed) {
   
    if (!zSpeed.isNan) {
      var t = Number(zSpeed) / 100;
      this._zSpeed = t;
    }
  }

  //change COLOR
  function colorChange(val) {
    debugger
    val = '0x' + val.replace('#','');
    this._color = parseInt(val, 16);
    makeCude();
  }