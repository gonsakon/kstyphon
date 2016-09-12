angular.module('app', []);

var ks;

angular.module('app').controller('appCtrl', [
  '$http', function($http) {
    var vm;
    vm = this;
    vm.data = [];
    vm.sort = 'Nopower';
    vm.zipNames = ks;
    vm.typeChange = function(types) {
      if (types === "NoWater") {
        vm.type = "NoWater";
      }
      if (types === "Nopower") {
        return vm.type = '停電';
      }
    };
    vm.type = ['停電', '停水', '暴雨積水'];
    vm.typeNow = '';
    $http({
      method: 'GET',
      url: '//gonsakon.github.io/HolidayAPI/typhon.json'
    }).then(function(response) {
      var origigndata, thisdata;
      origigndata = response.data;
      thisdata = [];
      origigndata.forEach(function(d) {
        if (d.InformDesc_ === '停電' || d.InformDesc_ === '暴雨積水(一)' || d.InformDesc_ === '暴雨積水(二)' || d.InformDesc_ === '停水' || d.InformDesc_ === '地下道、路面積水(一)' || d.InformDesc_ === '地下道、路面積水(二)') {
          if (d.Status_ !== "5") {
            return thisdata.push(d);
          }
        }
      });
      return vm.data = thisdata;
    }, function(response) {
      return console.log('error');
    });
  }
]);

ks = [
  {
    cwbid: '6400600',
    cwbtownid: '64000',
    county: '高雄市',
    name: '新興區',
    zip: '800'
  }, {
    cwbid: '6400700',
    cwbtownid: '64000',
    county: '高雄市',
    name: '前金區',
    zip: '801'
  }, {
    cwbid: '6400800',
    cwbtownid: '64000',
    county: '高雄市',
    name: '苓雅區',
    zip: '802'
  }, {
    cwbid: '6400100',
    cwbtownid: '64000',
    county: '高雄市',
    name: '鹽埕區',
    zip: '803'
  }, {
    cwbid: '6400200',
    cwbtownid: '64000',
    county: '高雄市',
    name: '鼓山區',
    zip: '804'
  }, {
    cwbid: '6401000',
    cwbtownid: '64000',
    county: '高雄市',
    name: '旗津區',
    zip: '805'
  }, {
    cwbid: '6400900',
    cwbtownid: '64000',
    county: '高雄市',
    name: '前鎮區',
    zip: '806'
  }, {
    cwbid: '6400500',
    cwbtownid: '64000',
    county: '高雄市',
    name: '三民區',
    zip: '807'
  }, {
    cwbid: '6400400',
    cwbtownid: '64000',
    county: '高雄市',
    name: '楠梓區',
    zip: '811'
  }, {
    cwbid: '6401100',
    cwbtownid: '64000',
    county: '高雄市',
    name: '小港區',
    zip: '812'
  }, {
    cwbid: '6400300',
    cwbtownid: '64000',
    county: '高雄市',
    name: '左營區',
    zip: '813'
  }, {
    cwbid: '6400017',
    cwbtownid: '64000',
    county: '高雄市',
    name: '仁武區',
    zip: '814'
  }, {
    cwbid: '6400016',
    cwbtownid: '64000',
    county: '高雄市',
    name: '大社區',
    zip: '815'
  }, {
    cwbid: '6400019',
    cwbtownid: '64000',
    county: '高雄市',
    name: '岡山區',
    zip: '820'
  }, {
    cwbid: '6400024',
    cwbtownid: '64000',
    county: '高雄市',
    name: '路竹區',
    zip: '821'
  }, {
    cwbid: '6400023',
    cwbtownid: '64000',
    county: '高雄市',
    name: '阿蓮區',
    zip: '822'
  }, {
    cwbid: '6400022',
    cwbtownid: '64000',
    county: '高雄市',
    name: '田寮區',
    zip: '823'
  }, {
    cwbid: '6400021',
    cwbtownid: '64000',
    county: '高雄市',
    name: '燕巢區',
    zip: '824'
  }, {
    cwbid: '6400020',
    cwbtownid: '64000',
    county: '高雄市',
    name: '橋頭區',
    zip: '825'
  }, {
    cwbid: '6400029',
    cwbtownid: '64000',
    county: '高雄市',
    name: '梓官區',
    zip: '826'
  }, {
    cwbid: '6400028',
    cwbtownid: '64000',
    county: '高雄市',
    name: '彌陀區',
    zip: '827'
  }, {
    cwbid: '6400027',
    cwbtownid: '64000',
    county: '高雄市',
    name: '永安區',
    zip: '828'
  }, {
    cwbid: '6400025',
    cwbtownid: '64000',
    county: '高雄市',
    name: '湖內區',
    zip: '829'
  }, {
    cwbid: '6400012',
    cwbtownid: '64000',
    county: '高雄市',
    name: '鳳山區',
    zip: '830'
  }, {
    cwbid: '6400014',
    cwbtownid: '64000',
    county: '高雄市',
    name: '大寮區',
    zip: '831'
  }, {
    cwbid: '6400013',
    cwbtownid: '64000',
    county: '高雄市',
    name: '林園區',
    zip: '832'
  }, {
    cwbid: '6400018',
    cwbtownid: '64000',
    county: '高雄市',
    name: '鳥松區',
    zip: '833'
  }, {
    cwbid: '6400015',
    cwbtownid: '64000',
    county: '高雄市',
    name: '大樹區',
    zip: '840'
  }, {
    cwbid: '6400030',
    cwbtownid: '64000',
    county: '高雄市',
    name: '旗山區',
    zip: '842'
  }, {
    cwbid: '6400031',
    cwbtownid: '64000',
    county: '高雄市',
    name: '美濃區',
    zip: '843'
  }, {
    cwbid: '6400032',
    cwbtownid: '64000',
    county: '高雄市',
    name: '六龜區',
    zip: '844'
  }, {
    cwbid: '6400035',
    cwbtownid: '64000',
    county: '高雄市',
    name: '內門區',
    zip: '845'
  }, {
    cwbid: '6400034',
    cwbtownid: '64000',
    county: '高雄市',
    name: '杉林區',
    zip: '846'
  }, {
    cwbid: '6400033',
    cwbtownid: '64000',
    county: '高雄市',
    name: '甲仙區',
    zip: '847'
  }, {
    cwbid: '6400037',
    cwbtownid: '64000',
    county: '高雄市',
    name: '桃源區',
    zip: '848'
  }, {
    cwbid: '6400038',
    cwbtownid: '64000',
    county: '高雄市',
    name: '那瑪夏區',
    zip: '849'
  }, {
    cwbid: '6400036',
    cwbtownid: '64000',
    county: '高雄市',
    name: '茂林區',
    zip: '851'
  }, {
    cwbid: '6400026',
    cwbtownid: '64000',
    county: '高雄市',
    name: '茄萣區',
    zip: '852'
  }
];
