//let them
let scene, camera, renderer, controls; //camera
let skyMapTexture, skyBoxGeometry, skyBasicMaterial, skyBox; // sky
let mountainMapTexture, bgMountainGeometry, bgMountainGeometry2nd,bgBuildingRightGeometry;
let ambientLight, pointLight, directionalLight; //lighting

// Scene and Camera ================================================================
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(59, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = -180; //NEAR-FAR
camera.position.y = 25;

// Models =======================================================================
let peopleLoader = new THREE.GLTFLoader(); 
peopleLoader.load('assets/models/people/scene.gltf', function ( gltf ) {
  gltfModel = gltf.scene;
  gltfModel.position.x = 80;
  gltfModel.position.y = 16;
  gltfModel.position.z = 293;
  gltfModel.rotation.y = 3;
  gltfModel.scale.set(0.2,0.2,0.2);
  gltfModel.receiveShadow = true;
  gltfModel.castShadow = true;
  scene.add(gltfModel);
}, undefined, function (error) {
	console.error( error );});

let peopleLoader2 = new THREE.GLTFLoader(); 
peopleLoader2.load('assets/models/couple_seating/scene.gltf', function ( gltf ) {
  gltfModel = gltf.scene;
  gltfModel.position.x = -90;
  gltfModel.position.y = 20;
  gltfModel.position.z = 329;
  gltfModel.rotation.y = 3.5;
  gltfModel.rotation.x = 0.1;
  gltfModel.scale.set(2.7,2.7,3);
  gltfModel.receiveShadow = true;
  gltfModel.castShadow = true;
  scene.add(gltfModel);
}, undefined, function (error) {
console.error( error );});


let lHouse = new THREE.GLTFLoader(); 
lHouse.load('assets/models/lighthouse/scene.gltf', function ( gltf ) {
  gltfModel = gltf.scene;
  gltfModel.position.x = -560;
  gltfModel.position.y = -20;
  gltfModel.position.z = 370;
  gltfModel.rotation.y = 15;
  gltfModel.rotation.x = 0.1;
  gltfModel.scale.set(0.4, 0.7, 0.6);
  gltfModel.receiveShadow = true;
  gltfModel.castShadow = true;
  scene.add(gltfModel);
}, undefined, function (error) {
console.error( error );});

// Geometries Background =========================================================
mountainMapTexture = new THREE.TextureLoader().load('assets/textures/mountainTexture.jpg');
pitchBlackTexture = new THREE.TextureLoader().load('assets/textures/black.png');

bgMountainGeometry = new THREE.ConeGeometry(13, 18);
bgMountainPhongMaterial = new THREE.MeshBasicMaterial({map: pitchBlackTexture});
bgMountainMesh = new THREE.Mesh(bgMountainGeometry, bgMountainPhongMaterial);
bgMountainMesh.position.x = -400;
bgMountainMesh.position.z = 350;
bgMountainMesh.position.y = -11;

bgMountainGeometry2nd = new THREE.ConeGeometry(45, 15);
bgMountainBasicMaterial2nd = new THREE.MeshBasicMaterial({map: pitchBlackTexture});
bgMountainMesh2nd = new THREE.Mesh(bgMountainGeometry2nd, bgMountainBasicMaterial2nd);
bgMountainMesh2nd.position.x = -350;
bgMountainMesh2nd.position.z = 370;
bgMountainMesh2nd.position.y = -11;

bgMountainGeometry3rd = new THREE.ConeGeometry(59, 15);
bgMountainBasicMaterial3rd = new THREE.MeshBasicMaterial({map: pitchBlackTexture});
bgMountainMesh3rd = new THREE.Mesh(bgMountainGeometry3rd, bgMountainBasicMaterial3rd);
bgMountainMesh3rd.position.x = -280;
bgMountainMesh3rd.position.z = 380;
bgMountainMesh3rd.position.y = -14;

bgMountainGeometry4th = new THREE.ConeGeometry(40, 18);
bgMountainBasicMaterial4th = new THREE.MeshBasicMaterial({map: pitchBlackTexture});
bgMountainMesh4th = new THREE.Mesh(bgMountainGeometry4th, bgMountainBasicMaterial4th);
bgMountainMesh4th.position.x = -500;
bgMountainMesh4th.position.z = 380;
bgMountainMesh4th.position.y = -14;

scene.add(bgMountainMesh, bgMountainMesh2nd, bgMountainMesh3rd, bgMountainMesh4th);

// Geometries ====================================================================
skyMapTexture = new THREE.TextureLoader().load('assets/textures/skyTexture.jpg');
seaWaterTexture = new THREE.TextureLoader().load('assets/textures/seaWater.jpg');
boatTexture = new THREE.TextureLoader().load('assets/textures/woodTexture.jfif');
tentTexture = new THREE.TextureLoader().load('assets/textures/tentTexture.jpg');

skyBoxGeometry = new THREE.BoxGeometry(1500, 550, 1);
skyPhongMaterial = new THREE.MeshPhongMaterial({map: skyMapTexture});
skyMesh = new THREE.Mesh(skyBoxGeometry, skyPhongMaterial);
skyMesh.position.z = 405;
skyMesh.position.y = 150;

let seaWater = new THREE.Mesh(new THREE.BoxGeometry(1100, 1, 500), new THREE.MeshPhongMaterial({map: seaWaterTexture, opacity: 1, transparent: true, side:THREE.DoubleSide, depthWrite: true}));
seaWater.receiveShadow = true;
seaWater.castShadow = true;
seaWater.position.y = -18;
seaWater.position.z = 110;
seaWater.scale.set(1.1,0.1,0.89);

scene.add(skyMesh, seaWater);

// BOAT GEOMETRY PARTS
let boatLeftSupport = new THREE.Mesh(new THREE.BoxGeometry(35, 6, 50), new THREE.MeshPhongMaterial({map: boatTexture}));
boatLeftSupport.receiveShadow = true;
boatLeftSupport.castShadow = true;
boatLeftSupport.position.x = 175;
boatLeftSupport.position.y = 18;
boatLeftSupport.position.z = 300;
boatLeftSupport.rotation.z = 9.7;
scene.add(boatLeftSupport);

let boatRightSupport = new THREE.Mesh(new THREE.BoxGeometry(35, 6, 50), new THREE.MeshPhongMaterial({map: boatTexture}));
boatRightSupport.receiveShadow = true;
boatRightSupport.castShadow = true;
boatRightSupport.position.x = -175;
boatRightSupport.position.y = 14;
boatRightSupport.position.z = 300;
scene.add(boatRightSupport);


let boatRightSupportStand = new THREE.Mesh(new THREE.BoxGeometry(15, 15, 50), new THREE.MeshPhongMaterial({map: boatTexture}));
boatRightSupportStand.receiveShadow = true;
boatRightSupportStand.castShadow = true;
boatRightSupportStand.position.x = -185;
boatRightSupportStand.position.y = 19;
boatRightSupportStand.position.z = 300;
scene.add(boatRightSupportStand);

//CENTER BODY OF THE BOAT
let boatCenterBody = new THREE.Mesh(new THREE.CylinderGeometry(210, 5, 200, 10), new THREE.MeshPhongMaterial({map: boatTexture, wireframe:false}));
boatCenterBody.receiveShadow = true;
boatCenterBody.castShadow = true;
boatCenterBody.position.y = -83;
boatCenterBody.position.z = 380;
scene.add(boatCenterBody);

class CustomSinCurve extends THREE.Curve { //straight line
    constructor(scale) {
      super();
      this.scale = scale;}
        getPoint(t) {
      let tx = t * 10 - 1.5;
      let ty = Math.sin(20 * Math.PI * t);
      let tz = 3;
      return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);}}
      let path = new CustomSinCurve(14);
      let path2 = new CustomSinCurve(9);
      let path3 = new CustomSinCurve(24);
      let path4 = new CustomSinCurve(30);
 
class CustomSinCurveSecond extends THREE.Curve { //straight line
  constructor(scale) {
    super();
    this.scale = scale;}
      getPoint(t) {
    let tx = t * 11 - 1.5;
    let ty = Math.sin(13 * Math.PI * t);
    let tz = 4;
    return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);}}
    let path5 = new CustomSinCurveSecond(5);


  //right ropes tube lines
  let tubeGeometryConnectorLine = new THREE.Mesh(new THREE.BoxGeometry(215, 0.3, 0.3), new THREE.MeshPhongMaterial({map: boatTexture}));
  tubeGeometryConnectorLine.receiveShadow = true;
  tubeGeometryConnectorLine.castShadow = true;
  tubeGeometryConnectorLine.position.x = 5;
  tubeGeometryConnectorLine.position.y = 140;
  tubeGeometryConnectorLine.position.z = 295;
  scene.add(tubeGeometryConnectorLine);

  let tubeGeometry1st = new THREE.Mesh(new THREE.TubeBufferGeometry(path, 20, 1, 8, false), new THREE.MeshPhongMaterial({map: boatTexture}));
  tubeGeometry1st.position.x = -143;
  tubeGeometry1st.position.y = 27;
  tubeGeometry1st.position.z = 261;
  tubeGeometry1st.rotation.z = 20;
  scene.add(tubeGeometry1st);

  let tubeGeometry2nd = new THREE.Mesh(new THREE.TubeBufferGeometry(path, 20, 1, 8, false), new THREE.MeshPhongMaterial({map: boatTexture}));
  tubeGeometry2nd.position.x = -143;
  tubeGeometry2nd.position.y = 27;
  tubeGeometry2nd.position.z = 258;
  tubeGeometry2nd.rotation.z = 20;
  scene.add(tubeGeometry2nd);

  let tubeGeometry3rd = new THREE.Mesh(new THREE.TubeBufferGeometry(path2, 5, 1, 8, false), new THREE.MeshPhongMaterial({map: boatTexture}));
  tubeGeometry3rd.position.x = -123;
  tubeGeometry3rd.position.y = 24;
  tubeGeometry3rd.position.z = 261;
  tubeGeometry3rd.rotation.z = 20;
  scene.add(tubeGeometry3rd);

  let tubeGeometry4th = new THREE.Mesh(new THREE.TubeBufferGeometry(path2, 5, 1, 8, false), new THREE.MeshPhongMaterial({map: boatTexture}));
  tubeGeometry4th.position.x = -123;
  tubeGeometry4th.position.y = 24;
  tubeGeometry4th.position.z = 258;
  tubeGeometry4th.rotation.z = 20;
  scene.add(tubeGeometry4th);

  let tubeGeometry5th = new THREE.Mesh(new THREE.TubeBufferGeometry(path3, 20, 1, 8, false), new THREE.MeshPhongMaterial({map: boatTexture}));
  tubeGeometry5th.position.x = -79;
  tubeGeometry5th.position.y = 111;
  tubeGeometry5th.position.z = 237;
  tubeGeometry5th.rotation.z = -25.9;
  scene.add(tubeGeometry5th);

  let tubeGeometry6th = new THREE.Mesh(new THREE.TubeBufferGeometry(path, 20, 1, 8, false), new THREE.MeshPhongMaterial({map: boatTexture}));
  tubeGeometry6th.position.x = -85;
  tubeGeometry6th.position.y = 121;
  tubeGeometry6th.position.z = 258;
  tubeGeometry6th.rotation.z = -25.8;
  scene.add(tubeGeometry6th);

  let tubeGeometry7th = new THREE.Mesh(new THREE.TubeBufferGeometry(path3, 20, 1, 8, false), new THREE.MeshPhongMaterial({map: boatTexture}));
  tubeGeometry7th.position.x = -71;
  tubeGeometry7th.position.y = 116;
  tubeGeometry7th.position.z = 231;
  tubeGeometry7th.rotation.z = -25.8;
  scene.add(tubeGeometry7th);

  //center tube lines /  center ropes
  let tubeGeometry8th = new THREE.Mesh(new THREE.TubeBufferGeometry(path4, 10, 1, 5, false), new THREE.MeshPhongMaterial({map: boatTexture}));
  tubeGeometry8th.position.x = -50;
  tubeGeometry8th.position.y = -115;
  tubeGeometry8th.position.z = 206;
  tubeGeometry8th.rotation.z = -23.8;
  scene.add(tubeGeometry8th);

  let tubeGeometry9th = new THREE.Mesh(new THREE.TubeBufferGeometry(path4, 20, 1, 5, false), new THREE.MeshPhongMaterial({map: boatTexture}));
  tubeGeometry9th.position.x = 38;
  tubeGeometry9th.position.y = 100;
  tubeGeometry9th.position.z = 206;
  tubeGeometry9th.rotation.z = -1;
  scene.add(tubeGeometry9th);

  //left tube lines/ left ropes
  let tubeGeometry10th = new THREE.Mesh(new THREE.TubeBufferGeometry(path, 20, 1, 5, false), new THREE.MeshPhongMaterial({map: boatTexture}));
  tubeGeometry10th.position.x = 118;
  tubeGeometry10th.position.y = 127;
  tubeGeometry10th.position.z = 260;
  tubeGeometry10th.rotation.z = -1.1;
  scene.add(tubeGeometry10th);

  let tubeGeometry11th = new THREE.Mesh(new THREE.TubeBufferGeometry(path, 20, 1, 5, false), new THREE.MeshPhongMaterial({map: boatTexture}));
  tubeGeometry11th.position.x = 88;
  tubeGeometry11th.position.y = -29;
  tubeGeometry11th.position.z = 266;
  tubeGeometry11th.rotation.z = 1.6;
  scene.add(tubeGeometry11th);

  let tubeGeometry12th = new THREE.Mesh(new THREE.TubeBufferGeometry(path, 20, 1, 5, false), new THREE.MeshPhongMaterial({map: boatTexture}));
  tubeGeometry12th.position.x = 133;
  tubeGeometry12th.position.y = -26;
  tubeGeometry12th.position.z = 242;
  tubeGeometry12th.rotation.z = 1.6;
  scene.add(tubeGeometry12th);

  let tubeGeometry13th = new THREE.Mesh(new THREE.TubeBufferGeometry(path2, 20, 1, 5, false), new THREE.MeshPhongMaterial({map: boatTexture}));
  tubeGeometry13th.position.x = 80;
  tubeGeometry13th.position.y = 56;
  tubeGeometry13th.position.z = 275;
  tubeGeometry13th.rotation.z = 1.2;
  scene.add(tubeGeometry13th);

//FENCE CENTER
let leftFenceBeam = new THREE.Mesh(new THREE.TubeBufferGeometry(path5, 3, 11, 16, false), new THREE.MeshPhongMaterial({map: boatTexture}));
leftFenceBeam.position.x = 188;
leftFenceBeam.position.y = 13;
leftFenceBeam.position.z = 280;
leftFenceBeam.rotation.z = -1.1;
leftFenceBeam.rotation.x = 4.6;
scene.add(leftFenceBeam);


let fenceBeam = new THREE.Mesh(new THREE.BoxGeometry(320, 1, 1), new THREE.MeshPhongMaterial({map: boatTexture}));
fenceBeam.receiveShadow = true;
fenceBeam.castShadow = true;
fenceBeam.position.x = 0;
fenceBeam.position.y = 25;
fenceBeam.position.z = 230;
scene.add(fenceBeam);

let fenceBeamBack = new THREE.Mesh(new THREE.BoxGeometry(320, 1, 1), new THREE.MeshPhongMaterial({map: boatTexture}));
fenceBeamBack.receiveShadow = true;
fenceBeamBack.castShadow = true;
fenceBeamBack.position.x = 0;
fenceBeamBack.position.y = 25;
fenceBeamBack.position.z = 325;
scene.add(fenceBeamBack);

//LEFT POLE
let boatSailTexture = new THREE.TextureLoader().load('assets/textures/sailTexture.png');
let customTriangleGeometry = new THREE.Geometry();
let customTriangleGeometry2 = new THREE.Geometry();
let triangleSide1 = new THREE.Vector3(0, 0, 0);
let triangleSide2 = new THREE.Vector3(90, 0, 0);
let triangleSide3 = new THREE.Vector3(60, 90, 0);
let triangle = new THREE.Triangle(triangleSide1, triangleSide2, triangleSide3);
let triangle2 = new THREE.Triangle(triangleSide1, triangleSide2, triangleSide3);
let normalTriangle = triangle.normal();
let normalTriangle2 = triangle.normal();
customTriangleGeometry.vertices.push(triangle.a, triangle.b, triangle.c);
customTriangleGeometry.faces.push(new THREE.Face3(0, 1, 2, normalTriangle));
let triangleMesh1 = new THREE.Mesh(customTriangleGeometry, new THREE.MeshPhongMaterial({map: boatSailTexture, transparent: false, side: THREE.DoubleSide, depthWrite: true}));
let triangleMesh2 = new THREE.Mesh(customTriangleGeometry, new THREE.MeshPhongMaterial({map: boatSailTexture, transparent: false, side: THREE.DoubleSide, depthWrite: true}));
triangleMesh1.receiveShadow = true;
triangleMesh1.castShadow = true;
triangleMesh1.position.x = 163;
triangleMesh1.position.y = 40;
triangleMesh1.position.z = 300;
triangleMesh1.rotation.z = 0.1;
triangleMesh1.rotation.y = 9.5;
triangleMesh2.receiveShadow = true;
triangleMesh2.castShadow = true;
triangleMesh2.position.x = 61;
triangleMesh2.position.y = 48;
triangleMesh2.position.z = 300;
triangleMesh2.rotation.z = 0.1;
triangleMesh2.rotation.y = 9.7;
scene.add(triangleMesh1, triangleMesh2);


let leftVerticalTallStick = new THREE.Mesh(new THREE.BoxGeometry(5, 126, 5), new THREE.MeshPhongMaterial({map: boatTexture}));
leftVerticalTallStick.receiveShadow = true;
leftVerticalTallStick.castShadow = true;
leftVerticalTallStick.position.x = 110;
leftVerticalTallStick.position.y = 80;
leftVerticalTallStick.position.z = 300;
scene.add(leftVerticalTallStick);


let leftSmallHorizontalStick = new THREE.Mesh(new THREE.BoxGeometry(20, 5, 5), new THREE.MeshPhongMaterial({map: boatTexture}));
leftSmallHorizontalStick.receiveShadow = true;
leftSmallHorizontalStick.castShadow = true;
leftSmallHorizontalStick.position.x = 110;
leftSmallHorizontalStick.position.y = 130;
leftSmallHorizontalStick.position.z = 300;
leftSmallHorizontalStick.rotation.y = -100;
scene.add(leftSmallHorizontalStick);

let leftMediumHorizontalStick = new THREE.Mesh(new THREE.BoxGeometry(50, 5, 5), new THREE.MeshPhongMaterial({map: boatTexture}));
leftMediumHorizontalStick.receiveShadow = true;
leftMediumHorizontalStick.castShadow = true;
leftMediumHorizontalStick.position.x = 110;
leftMediumHorizontalStick.position.y = 90;
leftMediumHorizontalStick.position.z = 300;
leftMediumHorizontalStick.rotation.y = -100;
scene.add(leftMediumHorizontalStick);

let leftMedium2HorizontalStick = new THREE.Mesh(new THREE.BoxGeometry(50, 5, 5), new THREE.MeshPhongMaterial({map: boatTexture}));
leftMedium2HorizontalStick.receiveShadow = true;
leftMedium2HorizontalStick.castShadow = true;
leftMedium2HorizontalStick.position.x = 110;
leftMedium2HorizontalStick.position.y = 50;
leftMedium2HorizontalStick.position.z = 300;
leftMedium2HorizontalStick.rotation.y = -100;
scene.add(leftMedium2HorizontalStick);

//CENTER POLE
let centerVerticalTallStick = new THREE.Mesh(new THREE.BoxGeometry(5, 126, 5), new THREE.MeshPhongMaterial({map: boatTexture}));
centerVerticalTallStick.receiveShadow = true;
centerVerticalTallStick.castShadow = true;
centerVerticalTallStick.position.x = 10;
centerVerticalTallStick.position.y = 80;
centerVerticalTallStick.position.z = 300;
scene.add(centerVerticalTallStick);

let centerSmallHorizontalStick = new THREE.Mesh(new THREE.BoxGeometry(20, 5, 5), new THREE.MeshPhongMaterial({map: boatTexture}));
centerSmallHorizontalStick.receiveShadow = true;
centerSmallHorizontalStick.castShadow = true;
centerSmallHorizontalStick.position.x = 10;
centerSmallHorizontalStick.position.y = 130;
centerSmallHorizontalStick.position.z = 300;
centerSmallHorizontalStick.rotation.y = -97;
scene.add(centerSmallHorizontalStick);

let centerMediumHorizontalStick = new THREE.Mesh(new THREE.BoxGeometry(50, 5, 5), new THREE.MeshPhongMaterial({map: boatTexture}));
centerMediumHorizontalStick.receiveShadow = true;
centerMediumHorizontalStick.castShadow = true;
centerMediumHorizontalStick.position.x = 10;
centerMediumHorizontalStick.position.y = 90;
centerMediumHorizontalStick.position.z = 300;
centerMediumHorizontalStick.rotation.y = -97;
scene.add(centerMediumHorizontalStick);

let centerMedium2HorizontalStick = new THREE.Mesh(new THREE.BoxGeometry(50, 5, 5), new THREE.MeshPhongMaterial({map: boatTexture}));
centerMedium2HorizontalStick.receiveShadow = true;
centerMedium2HorizontalStick.castShadow = true;
centerMedium2HorizontalStick.position.x = 10;
centerMedium2HorizontalStick.position.y = 50;
centerMedium2HorizontalStick.position.z = 300;
centerMedium2HorizontalStick.rotation.y = -97;
scene.add(centerMedium2HorizontalStick);

//RIGHT POLE
let rightVerticalTallStick = new THREE.Mesh(new THREE.BoxGeometry(5, 126, 5), new THREE.MeshPhongMaterial({map: boatTexture}));
rightVerticalTallStick.receiveShadow = true;
rightVerticalTallStick.castShadow = true;
rightVerticalTallStick.position.x = -100;
rightVerticalTallStick.position.y = 80;
rightVerticalTallStick.position.z = 300;
scene.add(rightVerticalTallStick);

let rightSmallHorizontalStick = new THREE.Mesh(new THREE.BoxGeometry(20, 5, 5), new THREE.MeshPhongMaterial({map: boatTexture}));
rightSmallHorizontalStick.receiveShadow = true;
rightSmallHorizontalStick.castShadow = true;
rightSmallHorizontalStick.position.x = -100;
rightSmallHorizontalStick.position.y = 130;
rightSmallHorizontalStick.position.z = 300;
rightSmallHorizontalStick.rotation.y = -87;
scene.add(rightSmallHorizontalStick);

let rightMediumHorizontalStick = new THREE.Mesh(new THREE.BoxGeometry(50, 5, 5), new THREE.MeshPhongMaterial({map: boatTexture}));
rightMediumHorizontalStick.receiveShadow = true;
rightMediumHorizontalStick.castShadow = true;
rightMediumHorizontalStick.position.x = -100;
rightMediumHorizontalStick.position.y = 90;
rightMediumHorizontalStick.position.z = 300;
rightMediumHorizontalStick.rotation.y = -87;
scene.add(rightMediumHorizontalStick);

let rightMedium2HorizontalStick = new THREE.Mesh(new THREE.BoxGeometry(50, 5, 5), new THREE.MeshPhongMaterial({map: boatTexture}));
rightMedium2HorizontalStick.receiveShadow = true;
rightMedium2HorizontalStick.castShadow = true;
rightMedium2HorizontalStick.position.x = -100;
rightMedium2HorizontalStick.position.y = 50;
rightMedium2HorizontalStick.position.z = 300;
rightMedium2HorizontalStick.rotation.y = -87;
scene.add(rightMedium2HorizontalStick);

let leftBeamAllowanceMiniHouseCenter = new THREE.Mesh(new THREE.BoxGeometry(7, 30, 5), new THREE.MeshPhongMaterial({map: boatTexture}));
leftBeamAllowanceMiniHouseCenter.receiveShadow = true;
leftBeamAllowanceMiniHouseCenter.castShadow = true;
leftBeamAllowanceMiniHouseCenter.position.x = 32;
leftBeamAllowanceMiniHouseCenter.position.y = 30;
leftBeamAllowanceMiniHouseCenter.position.z = 280;
scene.add(leftBeamAllowanceMiniHouseCenter);

let leftAllowanceMiniHouseCenter = new THREE.Mesh(new THREE.BoxGeometry(70, 7, 20), new THREE.MeshPhongMaterial({map: boatTexture}));
leftAllowanceMiniHouseCenter.receiveShadow = true;
leftAllowanceMiniHouseCenter.castShadow = true;
leftAllowanceMiniHouseCenter.position.x = 0;
leftAllowanceMiniHouseCenter.position.y = 47;
leftAllowanceMiniHouseCenter.position.z = 280;
scene.add(leftAllowanceMiniHouseCenter);

let leftBodyMiniHouseCenter = new THREE.Mesh(new THREE.BoxGeometry(70, 17, 3), new THREE.MeshPhongMaterial({map: boatTexture}));
leftBodyMiniHouseCenter.receiveShadow = true;
leftBodyMiniHouseCenter.castShadow = true;
leftBodyMiniHouseCenter.position.x = 0;
leftBodyMiniHouseCenter.position.y = 22;
leftBodyMiniHouseCenter.position.z = 280;
scene.add(leftBodyMiniHouseCenter);

let leftWindowBodyMiniHouseCenterFirst = new THREE.Mesh(new THREE.BoxGeometry(5, 15, 3), new THREE.MeshPhongMaterial({map: boatTexture}));
leftWindowBodyMiniHouseCenterFirst.receiveShadow = true;
leftWindowBodyMiniHouseCenterFirst.castShadow = true;
leftWindowBodyMiniHouseCenterFirst.position.x = 9;
leftWindowBodyMiniHouseCenterFirst.position.y = 37;
leftWindowBodyMiniHouseCenterFirst.position.z = 280;
scene.add(leftWindowBodyMiniHouseCenterFirst);

let leftWindowBodyMiniHouseCenterSecond = new THREE.Mesh(new THREE.BoxGeometry(5, 15, 3), new THREE.MeshPhongMaterial({map: boatTexture}));
leftWindowBodyMiniHouseCenterSecond.receiveShadow = true;
leftWindowBodyMiniHouseCenterSecond.castShadow = true;
leftWindowBodyMiniHouseCenterSecond.position.x = -3;
leftWindowBodyMiniHouseCenterSecond.position.y = 37;
leftWindowBodyMiniHouseCenterSecond.position.z = 280;
scene.add(leftWindowBodyMiniHouseCenterSecond);

let leftWindowBodyMiniHouseCenterThird = new THREE.Mesh(new THREE.BoxGeometry(5, 15, 3), new THREE.MeshPhongMaterial({map: boatTexture}));
leftWindowBodyMiniHouseCenterThird.receiveShadow = true;
leftWindowBodyMiniHouseCenterThird.castShadow = true;
leftWindowBodyMiniHouseCenterThird.position.x = -15;
leftWindowBodyMiniHouseCenterThird.position.y = 37;
leftWindowBodyMiniHouseCenterThird.position.z = 280;
scene.add(leftWindowBodyMiniHouseCenterThird);

let leftWindowBodyMiniHouseCenterFourth = new THREE.Mesh(new THREE.BoxGeometry(5, 15, 3), new THREE.MeshPhongMaterial({map: boatTexture}));
leftWindowBodyMiniHouseCenterFourth.receiveShadow = true;
leftWindowBodyMiniHouseCenterFourth.castShadow = true;
leftWindowBodyMiniHouseCenterFourth.position.x = -26;
leftWindowBodyMiniHouseCenterFourth.position.y = 37;
leftWindowBodyMiniHouseCenterFourth.position.z = 280;
scene.add(leftWindowBodyMiniHouseCenterFourth);

let leftMiniHouseCenter = new THREE.Mesh(new THREE.BoxGeometry(30, 13, 5), new THREE.MeshPhongMaterial({map: boatTexture}));
leftMiniHouseCenter.receiveShadow = true;
leftMiniHouseCenter.castShadow = true;
leftMiniHouseCenter.position.x = -25;
leftMiniHouseCenter.position.y = 47;
leftMiniHouseCenter.position.z = 300;
scene.add(leftMiniHouseCenter);

let miniHouseCenter = new THREE.Mesh(new THREE.BoxGeometry(35, 35, 30), new THREE.MeshPhongMaterial({map: boatTexture}));
miniHouseCenter.receiveShadow = true;
miniHouseCenter.castShadow = true;
miniHouseCenter.position.x = -55;
miniHouseCenter.position.y = 30;
miniHouseCenter.position.z = 300;
scene.add(miniHouseCenter);

let tentRoof = new THREE.Mesh(new THREE.DodecahedronGeometry(7), new THREE.MeshBasicMaterial({map: boatTexture}));
tentRoof.scale.set(3.5,1.4,3.0);
tentRoof.receiveShadow = true;
tentRoof.castShadow = true;
tentRoof.position.x = -55;
tentRoof.position.y = 51;
tentRoof.position.z = 300;
scene.add(tentRoof);

// Renderer ====================================================================
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

//Lightings ====================================================================
ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.3); //brightness
scene.add(ambientLight);

let hemisphereLight = new THREE.HemisphereLight(0x1c2842, 0xfd5e53, 0.1); //gradient effect, bottom then top
scene.add(hemisphereLight);

let spotLight = new THREE.PointLight( 0xFAD6A5, 2.9); // sunlight circle
spotLight.position.set(-50, 130, 320);
spotLight.shadow.camera.near = 0.1;
spotLight.shadow.camera.far = 25;
spotLight.castShadow = true;
spotLight.receiveShadow = true;
scene.add(spotLight);





controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 5, 0);
function animate() {
    controls.update();
    requestAnimationFrame(animate);

    let time = Date.now() * 0.0005;

    // spotLight.position.x = Math.sin(time * 0.7) * 30;
    // spotLight.position.y = Math.cos(time * 0.5) * 40;
    // spotLight.position.z = Math.cos(time * 0.3) * 30;



    renderer.render(scene, camera);
}
animate();
