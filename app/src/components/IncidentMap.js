import * as React from "react";

import GoogleMapReact from "google-map-react";

import styles from "../App/styles.module.scss";

const IncidentMap = ({ center, zoom }) => {
  return (
    <div className={styles.map}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_INCIDENT_MAP,
          language: "en",
        }}
        center={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals //this is important!
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      ></GoogleMapReact>
    </div>
  );
};

IncidentMap.defaultProps = {
  center: {
    lat: 40.01,
    lng: -121.23,
  },
  zoom: 8,
};

const handleApiLoaded = (map, maps) => {
  const polygon = [
    { lat: 40.7839215727946, lng: -121.323603319216 },
    { lat: 40.7028552512127, lng: -121.309747832732 },
    { lat: 40.6228131962762, lng: -121.353690194175 },
    { lat: 40.6282360042001, lng: -121.270866486176 },
    { lat: 40.575953873301, lng: -121.263205042579 },
    { lat: 40.5572374788586, lng: -121.165424936665 },
    { lat: 40.5682417667294, lng: -121.098026259699 },
    { lat: 40.5222840063239, lng: -121.111765822188 },
    { lat: 40.4909027210266, lng: -121.159485894946 },
    { lat: 40.4698477177514, lng: -121.064317010104 },
    { lat: 40.3997870340424, lng: -121.022389703693 },
    { lat: 40.3403920839698, lng: -121.007726587134 },
    { lat: 40.2939594869938, lng: -120.918389888229 },
    { lat: 40.3574182367411, lng: -120.869089648344 },
    { lat: 40.3665935292578, lng: -120.779011069754 },
    { lat: 40.2668597196907, lng: -120.793663584677 },
    { lat: 40.2562053842863, lng: -120.705771583642 },
    { lat: 40.2071172789947, lng: -120.679262151385 },
    { lat: 40.1555475008527, lng: -120.631045969639 },
    { lat: 40.0628479118904, lng: -120.404548882558 },
    { lat: 40.100432546324, lng: -120.304926392939 },
    { lat: 40.1020061380923, lng: -120.236424971223 },
    { lat: 40.0507054331661, lng: -120.247286796869 },
    { lat: 39.9866279357612, lng: -120.272673129306 },
    { lat: 39.9489431981207, lng: -120.354829072842 },
    { lat: 39.9589648843396, lng: -120.443812607795 },
    { lat: 39.929911851915, lng: -120.543118000959 },
    { lat: 39.9101412888672, lng: -120.63718128157 },
    { lat: 39.9908655520986, lng: -120.775117546734 },
    { lat: 40.0003153898336, lng: -120.923386905338 },
    { lat: 39.9842515678461, lng: -121.065122716269 },
    { lat: 39.9199329480339, lng: -121.174455011209 },
    { lat: 39.9056992177178, lng: -121.320283804391 },
    { lat: 39.9668908122455, lng: -121.394055111118 },
    { lat: 40.0585057822748, lng: -121.461367159049 },
    { lat: 40.0665767282829, lng: -121.537427330001 },
    { lat: 40.1230517305993, lng: -121.460949286325 },
    { lat: 40.2290047207436, lng: -121.415113397347 },
    { lat: 40.290220707105, lng: -121.379207367131 },
    { lat: 40.3387516571807, lng: -121.399573819437 },
    { lat: 40.351075459748, lng: -121.494307105808 },
    { lat: 40.4330510232229, lng: -121.536308788233 },
    { lat: 40.5560399658847, lng: -121.479508178599 },
    { lat: 40.6513410069258, lng: -121.43160736877 },
    { lat: 40.7162589419992, lng: -121.374175686866 },
  ];

  const caldor = [
    { lat: 38.7170181086563, lng: -120.030856113181 },
    { lat: 38.7078323959256, lng: -120.049570438814 },
    { lat: 38.7056829892955, lng: -120.080466676081 },
    { lat: 38.6900312745905, lng: -120.111399769428 },
    { lat: 38.673727034471, lng: -120.12248290762 },
    { lat: 38.6590733232238, lng: -120.145882109157 },
    { lat: 38.6433294738236, lng: -120.146136091634 },
    { lat: 38.6419027816711, lng: -120.161168684651 },
    { lat: 38.6347754951749, lng: -120.174429030072 },
    { lat: 38.6272194212378, lng: -120.205097795943 },
    { lat: 38.6340838913013, lng: -120.240365035058 },
    { lat: 38.6282087880422, lng: -120.281530419191 },
    { lat: 38.6216142957693, lng: -120.322671654813 },
    { lat: 38.6045636712924, lng: -120.344744104862 },
    { lat: 38.6095939868988, lng: -120.358589926371 },
    { lat: 38.5867855053242, lng: -120.388051864946 },
    { lat: 38.578542691688, lng: -120.431857798348 },
    { lat: 38.5658489976824, lng: -120.45980572353 },
    { lat: 38.5649795667486, lng: -120.483969546782 },
    { lat: 38.5727084339041, lng: -120.524308196087 },
    { lat: 38.5815756394134, lng: -120.557484697109 },
    { lat: 38.586711827538, lng: -120.590088691918 },
    { lat: 38.597107136206, lng: -120.615698935728 },
    { lat: 38.6137518292868, lng: -120.651602704884 },
    { lat: 38.6288131260199, lng: -120.631937911374 },
    { lat: 38.6174077746049, lng: -120.60992927405 },
    { lat: 38.6216565128555, lng: -120.580765098245 },
    { lat: 38.6261631063371, lng: -120.550135460293 },
    { lat: 38.6471942369817, lng: -120.551823586952 },
    { lat: 38.6730772127696, lng: -120.559522803808 },
    { lat: 38.6704618205162, lng: -120.590493293122 },
    { lat: 38.6566502500772, lng: -120.622138684013 },
    { lat: 38.661129199855, lng: -120.652424772065 },
    { lat: 38.6734531813982, lng: -120.63901224934 },
    { lat: 38.6833686120085, lng: -120.617020909076 },
    { lat: 38.7072918476272, lng: -120.597398655287 },
    { lat: 38.715927626335, lng: -120.562780136351 },
    { lat: 38.7247326370621, lng: -120.532913742099 },
    { lat: 38.7425103955101, lng: -120.503975497978 },
    { lat: 38.7492575517253, lng: -120.478387620422 },
    { lat: 38.7600542139724, lng: -120.450128286162 },
    { lat: 38.7754473378479, lng: -120.411421914355 },
    { lat: 38.7657819551268, lng: -120.370189069439 },
    { lat: 38.7624516799536, lng: -120.326852174295 },
    { lat: 38.7722510033, lng: -120.290589723117 },
    { lat: 38.7920391053585, lng: -120.265181817639 },
    { lat: 38.8036706762006, lng: -120.236414542679 },
    { lat: 38.8323317169835, lng: -120.223967206726 },
    { lat: 38.8440868814535, lng: -120.198802491365 },
    { lat: 38.8450478361684, lng: -120.176514636989 },
    { lat: 38.8317037256148, lng: -120.166899407056 },
    { lat: 38.8361486059479, lng: -120.121405288605 },
    { lat: 38.8257763782469, lng: -120.095171348985 },
    { lat: 38.8425830824891, lng: -120.087292697244 },
    { lat: 38.8343524206192, lng: -120.05062268671 },
    { lat: 38.8440844921218, lng: -120.029937193239 },
    { lat: 38.8196098107787, lng: -120.02311131401 },
    { lat: 38.8013699883392, lng: -120.04622110082 },
    { lat: 38.7779980896514, lng: -120.067068129345 },
    { lat: 38.874503395812, lng: -119.966128213793 },
    { lat: 38.8886555066129, lng: -119.933625784306 },
    { lat: 38.8638426931541, lng: -119.927263945109 },
    { lat: 38.8517503846437, lng: -119.945631883063 },
    { lat: 38.8305219230616, lng: -119.970023523562 },
    { lat: 38.8194868944958, lng: -119.989261293918 },
    { lat: 38.8084684076845, lng: -120.011551630339 },
    { lat: 38.8349022169929, lng: -120.016067191778 },
    { lat: 38.850376005144, lng: -119.997742611011 },
  ];

  const river = [
    { lat: 39.0890294201934, lng: -120.991324919019 },
    { lat: 39.0927770913431, lng: -120.991444640358 },
    { lat: 39.0970211784979, lng: -120.991315755498 },
    { lat: 39.1007221599371, lng: -120.991454351417 },
    { lat: 39.1045071549868, lng: -120.990919656966 },
    { lat: 39.1084105381066, lng: -120.990922944235 },
    { lat: 39.1110133062366, lng: -120.994057385109 },
    { lat: 39.1145312355654, lng: -120.993611572948 },
    { lat: 39.1179830896137, lng: -120.992374114499 },
    { lat: 39.1213335939369, lng: -120.990207005345 },
    { lat: 39.1255041872947, lng: -120.989655975091 },
    { lat: 39.1294468258545, lng: -120.987791642779 },
    { lat: 39.1332934597711, lng: -120.985704486536 },
    { lat: 39.1338907476099, lng: -120.982558396329 },
    { lat: 39.1374478516292, lng: -120.980520124157 },
    { lat: 39.1399865209134, lng: -120.977190748385 },
    { lat: 39.1427894089978, lng: -120.974752461864 },
    { lat: 39.1458346286883, lng: -120.974332893579 },
    { lat: 39.1460897777543, lng: -120.97147982161 },
    { lat: 39.1440946182866, lng: -120.967868897934 },
    { lat: 39.1414621979535, lng: -120.968249551789 },
    { lat: 39.1390886435629, lng: -120.968850792742 },
    { lat: 39.1376267828414, lng: -120.969372146702 },
    { lat: 39.1341191362575, lng: -120.969981782469 },
    { lat: 39.13219563135, lng: -120.968072139547 },
    { lat: 39.1317853100378, lng: -120.963101984312 },
    { lat: 39.1275865438347, lng: -120.963640218344 },
    { lat: 39.1235603070503, lng: -120.964903779443 },
    { lat: 39.1198881421538, lng: -120.963894357254 },
    { lat: 39.1173230167682, lng: -120.966286303672 },
    { lat: 39.1137150173377, lng: -120.965064450424 },
    { lat: 39.1118390294663, lng: -120.968731852587 },
    { lat: 39.1084702237421, lng: -120.97206567415 },
    { lat: 39.1053471782641, lng: -120.975547573244 },
    { lat: 39.1014968480996, lng: -120.976504993347 },
    { lat: 39.0987338461032, lng: -120.976999381241 },
    { lat: 39.0949471416536, lng: -120.978635840103 },
    { lat: 39.0913113666702, lng: -120.980500381482 },
    { lat: 39.0878627051511, lng: -120.983591370314 },
    { lat: 39.0860607104842, lng: -120.988762813924 },
  ];

  const lava = [
    { lat: 41.4023406525099, lng: -122.27219889621 },
    { lat: 41.4046671340067, lng: -122.282147156772 },
    { lat: 41.4243149829041, lng: -122.29145404178 },
    { lat: 41.4331615081908, lng: -122.295002232642 },
    { lat: 41.4346142956294, lng: -122.305091010376 },
    { lat: 41.4374897971525, lng: -122.313249746043 },
    { lat: 41.4400009476674, lng: -122.315940878547 },
    { lat: 41.4465515331083, lng: -122.317615503527 },
    { lat: 41.4480944231636, lng: -122.319855077192 },
    { lat: 41.454389932232, lng: -122.327683863452 },
    { lat: 41.4591812570158, lng: -122.334801417569 },
    { lat: 41.4655546096229, lng: -122.344608078489 },
    { lat: 41.4751094115498, lng: -122.348494979129 },
    { lat: 41.4823336911274, lng: -122.342638266209 },
    { lat: 41.492387628366, lng: -122.341265201178 },
    { lat: 41.5030288062965, lng: -122.341754438055 },
    { lat: 41.5136658109036, lng: -122.341274314587 },
    { lat: 41.5228039721964, lng: -122.342742428561 },
    { lat: 41.5300704650803, lng: -122.341559538673 },
    { lat: 41.5368302539745, lng: -122.347200312768 },
    { lat: 41.5405951022456, lng: -122.338771713308 },
    { lat: 41.5476630499858, lng: -122.3392982141 },
    { lat: 41.5560959820149, lng: -122.333783418841 },
    { lat: 41.5661032402254, lng: -122.331318007815 },
    { lat: 41.5750893150483, lng: -122.324390699807 },
    { lat: 41.5838940310021, lng: -122.316618757142 },
    { lat: 41.5880278392209, lng: -122.304415399129 },
    { lat: 41.5788057865321, lng: -122.311033318369 },
    { lat: 41.5700823008625, lng: -122.315661138676 },
    { lat: 41.5616621842182, lng: -122.318327878327 },
    { lat: 41.5639422086915, lng: -122.315388067897 },
    { lat: 41.5569266014946, lng: -122.318203469745 },
    { lat: 41.5475367725402, lng: -122.321519677871 },
    { lat: 41.5380326873133, lng: -122.322555332087 },
    { lat: 41.5282905688586, lng: -122.323827225257 },
    { lat: 41.5176853070718, lng: -122.324890903317 },
    { lat: 41.507840465642, lng: -122.320381502525 },
    { lat: 41.5048400928279, lng: -122.315923235635 },
    { lat: 41.5093540226541, lng: -122.31050721643 },
    { lat: 41.501800431267, lng: -122.311083263801 },
    { lat: 41.4946798316424, lng: -122.301746798169 },
    { lat: 41.5044847651512, lng: -122.301111379344 },
    { lat: 41.5151355423515, lng: -122.300622551201 },
    { lat: 41.5212505209774, lng: -122.297958446309 },
    { lat: 41.5271299207979, lng: -122.299030700585 },
    { lat: 41.5294956532045, lng: -122.292706960735 },
    { lat: 41.5246053712453, lng: -122.286984239624 },
    { lat: 41.5177194637778, lng: -122.289278962661 },
    { lat: 41.5090237786739, lng: -122.2855707001 },
    { lat: 41.5028972889792, lng: -122.277003553474 },
    { lat: 41.5046171518016, lng: -122.268150140716 },
    { lat: 41.5121514365025, lng: -122.267715865463 },
    { lat: 41.5189645549488, lng: -122.2689474117 },
    { lat: 41.525416566299, lng: -122.261149013649 },
    { lat: 41.5245070535005, lng: -122.252883072138 },
    { lat: 41.5229847813353, lng: -122.246438866412 },
    { lat: 41.5203835499229, lng: -122.238186297221 },
    { lat: 41.5143689980266, lng: -122.229159773718 },
    { lat: 41.514837436544, lng: -122.222618320871 },
    { lat: 41.5078135892504, lng: -122.224624418801 },
    { lat: 41.5050019860885, lng: -122.21424013756 },
    { lat: 41.4992673561915, lng: -122.20867163742 },
    { lat: 41.4917719136398, lng: -122.206176749975 },
    { lat: 41.485516324605, lng: -122.205891736095 },
    { lat: 41.4788259446816, lng: -122.204032032116 },
    { lat: 41.4749983981236, lng: -122.212020549613 },
    { lat: 41.4691509910725, lng: -122.216104419354 },
    { lat: 41.4664658243408, lng: -122.219927253944 },
    { lat: 41.4607697337676, lng: -122.22587943083 },
    { lat: 41.4563753580751, lng: -122.230560232873 },
    { lat: 41.4528400213788, lng: -122.228526956415 },
    { lat: 41.4124464828149, lng: -122.257750047329 },
  ];

  let bermudaTriangle = new maps.Polygon({
    paths: polygon,
    strokeColor: "red",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  bermudaTriangle.setMap(map);

  let caldorTriangle = new maps.Polygon({
    paths: caldor,
    strokeColor: "red",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  caldorTriangle.setMap(map);

  let riverTriangle = new maps.Polygon({
    paths: river,
    strokeColor: "red",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  riverTriangle.setMap(map);

  let lavaTriangle = new maps.Polygon({
    paths: lava,
    strokeColor: "red",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  lavaTriangle.setMap(map);
};

export default IncidentMap;

// { lat: 40.01, lng: -121.23 },
//     { lat: 39.93, lng: -120.539 },
//     { lat: 39.92, lng: -120.05 },
//     { lat: 40.28, lng: -120.54 },
//     { lat: 40.59, lng: -121.13 },
//     { lat: 40.68, lng: -121.38 },
//     { lat: 40.01, lng: -121.23 },
