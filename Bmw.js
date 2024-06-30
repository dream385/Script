// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: mobile-alt;
/**
 * 灏婇噸浣滆€呬唬鐮�,璇峰嬁鐩存帴鎶勮
 * Author:meiDaiSan
 * Date:2023-10-25
 */
// -------------------------------------------------------
// 鏄惁鏄紑鍙戠幆澧冿紝閰嶅悎鎵嬫満绔皟璇曚娇鐢紝姝ｅ紡鍙戝竷璁剧疆涓篺alse
const isDev = false;
const dependencyLSP = '2024052404';
const dependencyName = 'MDS.js';
const WIDGET_VERSION = '4.5.0-2';
const qqGroupNum = '217677336';
const fileIniCloud = module.filename.includes('Documents/iCloud~') ? true: false;
const WIDGET_NAME = 'bmw-linker';
const AUTHOR_NAME = '娌″甫浼�';
// 浠撳簱鏍圭洰褰�
const remoteHomeLandRoot = `https://m.qqtlr.com`;
console.log(`----------------------------------------`);
const BMW_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'x-user-agent': 'ios(17.4.1);bmw;4.5.0(33605);cn',
  'Accept-Language': 'zh-CN',
  'User-Agent' : 'Dart/3.2 (dart:io)',
};

let WIDGET_FONT = 'SF UI Display';
let WIDGET_FONT_BOLD = 'SF UI Display Bold';
let BMW_SERVER_HOST = 'https://myprofile.bmw.com.cn';
let DEFAULT_LOGO_LIGHT = `${remoteHomeLandRoot}/logo.png`;
let BMW_HEADERS_X = {};



// setup local storage keys
let PHONE_MY_BMW_REFRESH_TOKEN = 'PHONE_MY_BMW_REFRESH_TOKEN';//phone
let PHONE_MY_BMW_REFRESH_GCID = 'PHONE_MY_BMW_REFRESH_GCID';//phone
let VIN_MY_BMW_TIRES_DATA = 'VIN_MY_BMW_TIRES_DATA';//vin
let PHONE_MY_BMW_TOKEN = 'PHONE_MY_BMW_TOKEN';//phone
let PHONE_MY_BMW_TOKEN_UPDATE_LAST_AT = 'PHONE_MY_BMW_TOKEN_UPDATE_LAST_AT';//phone
let PHONE_MY_BMW_LAST_CHECK_IN_AT = 'PHONE_MY_BMW_LAST_CHECK_IN_AT';//phone
let PHONE_MY_BMW_LAST_JOYCOIN = 'PHONE_MY_BMW_LAST_JOYCOIN';//phone
let PHONE_MY_BMW_COFFEE_CHECK_AT = 'PHONE_MY_BMW_COFFEE_CHECK_AT';//phone
let PHONE_MY_BMW_COFFEE_NOTIFYK_MONTH = 'PHONE_MY_BMW_COFFEE_NOTIFYK_MONTH';//phone
let PHONE_MY_BMW_ACTIVITY_MONENT = 'PHONE_MY_BMW_ACTIVITY_MONENT';//鍙戝竷鍔ㄦ€�
let PHONE_MY_BMW_ACTIVITY_ARTICLE = 'PHONE_MY_BMW_ACTIVITY_ARTICLE';//鍙戝竷鏂囩珷
let PHONE_MY_BMW_ACTIVITY_LIKE = 'PHONE_MY_BMW_ACTIVITY_LIKE';//鐐硅禐
let PHONE_MY_BMW_ACTIVITY_COLLECT = 'PHONE_MY_BMW_ACTIVITY_COLLECT';//鏀惰棌
let PHONE_MY_BMW_ACTIVITY_COMMENT = 'PHONE_MY_BMW_ACTIVITY_COMMENT';//璇勮
let PHONE_MY_BMW_ACTIVITY_VIEW120S = 'PHONE_MY_BMW_ACTIVITY_VIEW120S';//娴忚120S
let PHONE_MY_BMW_ACTIVITY_FLLOW = 'PHONE_MY_BMW_ACTIVITY_FLLOW';//鍏虫敞5涓敤鎴�
let PHONE_MY_BMW_ACTIVITY_COUPON = 'PHONE_MY_BMW_ACTIVITY_COUPON';//棰嗗埜浠诲姟
let PHONE_MY_BMW_NOTATTENTION = 'PHONE_MY_BMW_NOTATTENTION'//鍙栧叧
let PHONE_MY_BMW_DOOR_LOCK = 'PHONE_MY_BMW_DOOR_LOCK'//閿佽溅
let VIN_MY_BMW_VEHICLE_UPDATE_LAST_AT = 'VIN_MY_BMW_VEHICLE_UPDATE_LAST_AT';//vin
let VIN_MY_BMW_VEHICLE_DATA = 'VIN_MY_BMW_VEHICLE_DATA';//vin
let VIN_MY_BMW_SUSTAINABILITY = 'VIN_MY_BMW_SUSTAINABILITY';//vin
let PHONE_MY_BMW_JOYCOININFO = 'PHONE_MY_BMW_JOYCOININFO';//phone
let PHONE_MY_BMW_X = 'PHONE_MY_BMW_X';//phone
let PHONE_MY_BMW_CORRELATION = 'PHONE_MY_BMW_CORRELATION';//phone
let PHONE_MY_BMW_VEHICLE_LIST_TIME = 'PHONE_MY_BMW_VEHICLE_LIST_TIME';
let PHONE_MY_BMW_VEHICLE_LIST = 'PHONE_MY_BMW_VEHICLE_LIST';
let WIDGET_DANGER_COLOR = '#ff0000';
let WIDGET_LOCKED_ICON = 'lock.shield';
let WIDGET_UNLOCKED_ICON = 'xmark.shield';
let WIDGET_SAFE_ICON = 'checkmark.shield';
let WIDGET_TIP_ICON = 'exclamationmark.shield';


// 渚濊禆鍖呯洰褰�
const fm = FileManager.local();
const rootDir = fm.documentsDirectory();
const cacheDir = fm.joinPath(rootDir, 'LSP');
const dependencyFileName = `${cacheDir}/${dependencyName}`;
// 涓嬭浇渚濊禆鍖�
await downloadLSPDependency();
// -------------------------------------------------------
if (typeof require === 'undefined') require = importModule
// 寮曞叆鐩稿叧鏂规硶
const { BaseWidget } = require(dependencyFileName);

// @瀹氫箟灏忕粍浠�
class Widget extends BaseWidget {


  defaultPreference = {
    titleDayColor: '#1d1d1d',
    titleNightColor: '#ffffff',
    iconSafeDayColor: '#1aab15',
    iconSafeNightColor: '#1aab15',
    iconUnsafeDayColor: '#eb4d3d',
    iconUnsafeNightColor: '#eb4d3d',
    iconDayColor: '#1d1d1d',
    iconNightColor: '#ffffff',
    custom_name: null,
    custom_vehicle_image: null,
    custom_logo_image: null,
    vin: '',
    map_api_key: null,
    locationType: 1,
    show_control_checks: 1,
    show_signinPic_checks: true,
    show_tire_fuel_checks: false,
    show_joyCoinText_checks: false,
    show_coffeeText_checks: false,
    luckyCoffeeTip: null,
    activityAllTasks: false,
    activityFllow: false,
    activityTask_120S: false,
    activityCoupon: false,
    activityPostMoment: false,
    activityCarLink: false,
    activityCommentText: '馃憤鐐硅禐',
    activityPostMomentText: '姣忔棩鎶ラ亾',
    ActivityTimerVal: '00:00',
    totalFuelLiters: 0,
    licensePlate: null,
    activityPostArticlePwd: ''
  };
  getValueByKey = (key) => typeof(this.readWidgetSetting()) === 'object' && this.readWidgetSetting()[key]!==undefined && this.readWidgetSetting()[key]!=='' ? this.readWidgetSetting()[key] : this.defaultPreference[key];

  titleDayColor = () => this.getValueByKey('titleDayColor');
  titleNightColor = () => this.getValueByKey('titleNightColor');

  iconSafeDayColor = () => this.getValueByKey('iconSafeDayColor');
  iconSafeNightColor = () => this.getValueByKey('iconSafeNightColor');

  iconUnsafeDayColor = () => this.getValueByKey('iconUnsafeDayColor');
  iconUnsafeNightColor = () => this.getValueByKey('iconUnsafeNightColor');

  iconDayColor = () => this.getValueByKey('iconDayColor');
  iconNightColor = () => this.getValueByKey('iconNightColor');
  
  custom_logo_image = () => this.getValueByKey('custom_logo_image');
  custom_vehicle_image = () => this.getValueByKey('custom_vehicle_image');
  custom_name = () => this.getValueByKey('custom_name');
  show_control_checks = () => Number(this.getValueByKey('show_control_checks'));
  locationType = () => Number(this.getValueByKey('locationType'));
  map_api_key = () => this.getValueByKey('map_api_key');
  getActivityAllTasksKey = () => this.getValueByKey('activityAllTasks');
  getActivityFllowKey = () => this.getValueByKey('activityFllow');
  getActivityTask_120SKey = () => this.getValueByKey('activityTask_120S');
  getActivityPostMomentKey = () => this.getValueByKey('activityPostMoment');
  getActivityCarLinkKey = () => this.getValueByKey('activityCarLink');
  getActivityCouponKey = () => this.getValueByKey('activityCoupon');
  show_signinPic_checks = () => this.getValueByKey('show_signinPic_checks');
  show_joyCoinText_checks = () => this.getValueByKey('show_joyCoinText_checks');
  activityCommentText = () => this.getValueByKey('activityCommentText');
  activityPostMomentText = () => this.getValueByKey('activityPostMomentText');
  ActivityTimerVal = () => this.getValueByKey('ActivityTimerVal');
  show_coffeeText_checks = () => this.getValueByKey('show_coffeeText_checks');
  totalFuelLiters = () => this.getValueByKey('totalFuelLiters');
  licensePlate = () => this.getValueByKey('licensePlate');
  getActivityPostArticlePwd = () => this.getValueByKey('activityPostArticlePwd');
  show_tire_fuel_checks = () => this.getValueByKey('show_tire_fuel_checks');

  constructor(scriptName, obj) {
    super(scriptName, obj);
    this.reset = false;
    this.defaultConfig.bgType = '4';
    this.setActivityTimer(); //璁剧疆姣忎釜浜虹殑鎵ц鏃堕棿,閿欏紑!
    this.checkUpdate(); // 妫€鏌ユ洿鏂�
  }


  getArrayLabel(len = 1) {
    let res = [];
    for (let i = 0; i <len; i++){
      res.push({ label: `${i<10 ? '0'+i: String(i)}`, value: i })
    }
    return res;
  }

  setActivityTimer() {
    let nowTime = this.getDateFormatterStr('HH:mm');
    let widgetSetting = this.readWidgetSetting();
    if (!widgetSetting.hasOwnProperty('ActivityTimerVal')) {
      this.writeWidgetSetting({ ...widgetSetting, ActivityTimerVal: nowTime});
    }
  }

  formatUserMobile(mobileStr) {
    mobileStr = mobileStr.replace(/\D/g, '');
    if (mobileStr.startsWith('86')) {
        return mobileStr;
    }
    if (mobileStr.length == 11) {
        return '86' + mobileStr;
    }
    return mobileStr;
  }

  async getSliderCaptcha(phone = null){
    let NonceResult = await this.getNonceData(this.getValueByKey('phone'), 1);
    if (!NonceResult || NonceResult.code != 0 || !NonceResult['correlation']) {
      await this.generateAlert('鐧诲綍澶辫触', '鑾峰彇瑙ｅ瘑瀛楃涓插け璐�,璇疯仈绯诲紑鍙戣€�', ["濂界殑"])
      return null
    } else {
      this.keySave(PHONE_MY_BMW_CORRELATION, NonceResult['correlation']);
      this.keySave(PHONE_MY_BMW_X, NonceResult['x']);
      BMW_HEADERS_X = {
        ...BMW_HEADERS_X,
        'x-correlation-id': NonceResult['correlation'],
        'bmw-correlation-id': NonceResult['correlation'],
        'x': NonceResult['x']
      };
    }
    let req = new Request(BMW_SERVER_HOST + `/eadrax-coas/v2/cop/create-captcha`);
    req.headers = {
        ...BMW_HEADERS,
        ...BMW_HEADERS_X
    }
    req.method = 'POST';
    req.body = JSON.stringify({
        mobile: phone || Number(this.getValueByKey('phone')).toString(),
        brand: "BMW"
    });
    const res = await req.loadJSON();
    let verifyId = res.data.verifyId;
    let backGroundImg = res.data.backGroundImg;
    let positionId = await this.position(backGroundImg);

    let reqCheck = new Request(BMW_SERVER_HOST + `/eadrax-coas/v2/cop/verify-captcha`);
    reqCheck.headers = {
        ...BMW_HEADERS,
        ...BMW_HEADERS_X
    }
    reqCheck.method = 'POST';
    reqCheck.body = JSON.stringify({
        position: positionId,
        verifyId: verifyId,
        mobile: phone || Number(this.getValueByKey('phone')).toString()
    });
    const resCheck = await reqCheck.loadJSON();
    if (resCheck.code==200){
        return verifyId;
    }else{
        return await this.getSliderCaptcha(phone);
    }
  }

  async sendLoginSMS() {
    let verifyId = await this.getSliderCaptcha();
    let smsReq = new Request(BMW_SERVER_HOST + `/eadrax-coas/v1/cop/message`);
    smsReq.method = 'POST';

    smsReq.body = JSON.stringify({
        mobile: Number(this.getValueByKey('phone')).toString(),
        deviceId: this.md5(this.getValueByKey('phone').slice(0, 16)),
        verifyId: verifyId
    });
    smsReq.headers = {
        ...BMW_HEADERS
    };
    let smsRes = await smsReq.loadJSON();
    console.warn(smsRes);
    if (smsRes.code !== 200 || !smsRes.data) {
      await this.generateAlert('鐧诲綍澶辫触', smsRes.description, ['濂界殑']);
      return null;

    }

    return smsRes.data['otpID'];
  }
  async position(backGroundImg) {
    const webView = new WebView();
    await webView.loadHTML(
    `<img id="sourceImg"src="data:image/jpg;base64,${backGroundImg}"/><canvas id="mainCanvas"/>`
    );
    const position = await webView.evaluateJavaScript(
    `
    var canvas = document.createElement("canvas");
    var sourceImg = document.getElementById("sourceImg");
    var ctx = canvas.getContext('2d');
    canvas.width = sourceImg.width;
    canvas.height = sourceImg.height;
    ctx.drawImage(sourceImg, 0, 0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    var pix = imgData.data;
    let pixels=[];
    let position='';
    for(let i=0 ; i< imgData.width * imgData.height ; i++){
        pixels[i] = [pix[i*4], pix[i*4 + 1], pix[i*4 + 2]];
    }
    // console.log(pixels.length);
    const block = {
        width: 15,
        height: 75
    };
    const targetColor = [220, 230, 221]; // dce6dd棰滆壊鐨凴GB鍊�
    const tolerance = 15; 
    let foundBlock = false;
    
    for(let y = 0; y < canvas.height - block.height; y++) {
        for(let x = 0; x < canvas.width - block.width; x++) {
        foundBlock = true;
        for(let i = 0; i < block.height; i++) {
            for(let j = 0; j < block.width; j++) {
            const pixelIndex = (y + i) * canvas.width + (x + j);
            const pr = pixels[pixelIndex];
            const dr = Math.abs(pr[0] - targetColor[0]);
            const dg = Math.abs(pr[1] - targetColor[1]);
            const db = Math.abs(pr[2] - targetColor[2]);
            
            if (dr > tolerance || dg > tolerance || db > tolerance) {
                foundBlock = false;
                break;
            }
            }
            if (!foundBlock) {
            break;
            }
        }
        if (foundBlock) {
            // console.log(x);
            position = ((x-26)/canvas.width).toFixed(2);
            break;
        }
        }
        if (foundBlock) {
        break;
        }
    }
    output = position.toString();
    `
    );
    return position;
  }

  async myBMWLogin(otpId) {
    await this.generateInputAlert({
      title: '閰嶇疆BMW鐧诲綍',
      message: '浣跨敤鐭俊鎺堟潈鐧诲綍',
      options: [{ hint: '鐭俊楠岃瘉鐮�', value: '' }]
    }, async (inputArr) => {
      const passCode = inputArr[0].value;
      console.log(`@@@@@` + inputArr[0].value)
      let NonceResult = await this.getNonceData(this.getValueByKey('phone'));
      if (!NonceResult || NonceResult.code != 0 || !NonceResult['data']) {
        await this.generateAlert('鐧诲綍澶辫触', '鑾峰彇瑙ｅ瘑瀛楃涓插け璐�,璇疯仈绯诲紑鍙戣€�', ["濂界殑"])
        return null
      }
      let nonceStr = NonceResult['data'];
      let req = new Request(BMW_SERVER_HOST + `/eadrax-coas/v2/login/sms`);
      req.method = 'POST';
      req.body = JSON.stringify({
          mobile: Number(this.getValueByKey('phone')).toString(),
          otpId: otpId,
          otpMsg: Number(passCode).toString()
      });

      req.headers = {
          ...BMW_HEADERS,
          'x-login-nonce': nonceStr,
          ...BMW_HEADERS_X
      };
      let loginResult = await req.loadJSON();
      if (!loginResult || loginResult.code != 200 || !loginResult['data']['refresh_token']) {
        await this.generateAlert('鐧诲綍澶辫触', loginResult['description']??'楠岃瘉鐮佽繃鏈燂紝璇烽噸鏂板彂閫佺煭淇�', ["濂界殑"])
        return null;
      }
      this.keySave(PHONE_MY_BMW_REFRESH_TOKEN, loginResult['data']['refresh_token']);
      this.keySave(PHONE_MY_BMW_REFRESH_GCID, loginResult['data']['gcid']);

      // start to get vehicle details
      let vehicle = this.getData(true);
      if (!vehicle) {
          return null;
      }
      await this.generateAlert('鐧诲綍鎴愬姛', '璇峰湪妗岄潰娣诲姞灏忕粍浠�', ["濂界殑"])
      return true;
    });
  }

  async myBMWLoginPwd(verifyId, phone, encryptPassword) {
    let NonceResult = await this.getNonceData(phone);
    if (!NonceResult || NonceResult.code != 0 || !NonceResult['data']) {
      await this.generateAlert('鐧诲綍澶辫触', '鑾峰彇瑙ｅ瘑瀛楃涓插け璐�,璇疯仈绯诲紑鍙戣€�', ["濂界殑"])
      return null
    }
    let nonceStr = NonceResult['data'];
    let req = new Request(BMW_SERVER_HOST + `/eadrax-coas/v2/login/pwd`);
    req.method = 'POST';
    req.body = JSON.stringify({
        mobile: phone,
        password: encryptPassword,
        verifyId: verifyId,
        deviceId: this.md5(phone)
    });

    req.headers = {
        ...BMW_HEADERS,
        'x-login-nonce': nonceStr,
        ...BMW_HEADERS_X
    };
    let loginResult = await req.loadJSON();
    if (!loginResult || loginResult.code != 200 || !loginResult['data']['refresh_token']) {
      await this.generateAlert('鐧诲綍澶辫触', loginResult['description']??'璇锋鏌ュ瘑鐮佹槸鍚︽纭�', ["濂界殑"])
      return null;
    }
    this.keySave(PHONE_MY_BMW_REFRESH_TOKEN, loginResult['data']['refresh_token']);
    this.keySave(PHONE_MY_BMW_REFRESH_GCID, loginResult['data']['gcid']);

    // start to get vehicle details
    let vehicle = this.getData(true);
    if (!vehicle) {
        return null;
    }
    await this.generateAlert('鐧诲綍鎴愬姛', '璇峰湪妗岄潰娣诲姞灏忕粍浠�', ["濂界殑"])
    return true;
    
  }

  async getAccessToken(forceRefresh = false) {
    let accessToken = '';
    let refreshToken = this.keyGet(PHONE_MY_BMW_REFRESH_TOKEN);
    if (!forceRefresh && this.keyGet(PHONE_MY_BMW_TOKEN_UPDATE_LAST_AT)) {
        let lastUpdate = parseInt(this.keyGet(PHONE_MY_BMW_TOKEN_UPDATE_LAST_AT));
        if (lastUpdate > this.getCurrentTimeStamp() -  60 * 50) {
          accessToken = this.keyGet(PHONE_MY_BMW_TOKEN);
        } else {
            if (this.keyGet(PHONE_MY_BMW_REFRESH_TOKEN)) {
              // get refresh token
              accessToken = await this.refreshToken(refreshToken);
            }
        }
    }
    if (accessToken && accessToken != '') {
        return accessToken;
    }
    accessToken = await this.refreshToken(refreshToken);
    return accessToken;
  }

  async refreshToken(refresh_token) {
    let gcidNonce = await this.getNonceData(this.keyGet(PHONE_MY_BMW_REFRESH_GCID));
    console.log("GCID=="+this.keyGet(PHONE_MY_BMW_REFRESH_GCID))
    console.log("GCID==Nonce=="+gcidNonce.data)
    BMW_HEADERS_X = {
      ...BMW_HEADERS_X,
      'x-correlation-id': this.keyGet('PHONE_MY_BMW_CORRELATION'),
      'bmw-correlation-id': this.keyGet('PHONE_MY_BMW_CORRELATION'),
      'x': this.keyGet('PHONE_MY_BMW_X'),
    };
    let req = new Request(BMW_SERVER_HOST + '/eadrax-coas/v2/oauth/token');
    req.headers = {
        ...BMW_HEADERS,
        'x-login-nonce': gcidNonce.data,
        ...BMW_HEADERS_X
    };
    req.method = 'POST';
    req.body = `grant_type=refresh_token&refresh_token=${refresh_token}`;
    const res = await req.loadJSON();
    if (res.access_token !== undefined) {
      const {access_token, refresh_token} = res;
      this.keySave(PHONE_MY_BMW_TOKEN, access_token);
      this.keySave(PHONE_MY_BMW_REFRESH_TOKEN, refresh_token);
      this.keySave(PHONE_MY_BMW_TOKEN_UPDATE_LAST_AT, String(this.getCurrentTimeStamp()));
      return access_token;
    } else {
      return '';
    }
  }

  getSignature(phone, xua) {
    var _0xodx='jsjiami.com.v7';const _0xd2ab5b=_0x5195;(function(_0x3c0c92,_0x1a3a3c,_0x55339a,_0x9642db,_0x17491d,_0xd22e43,_0xada6dc){return _0x3c0c92=_0x3c0c92>>0x7,_0xd22e43='hs',_0xada6dc='hs',function(_0x4d6516,_0x2ee7fe,_0x2d07a8,_0x1e836b,_0x239529){const _0x3d5d8f=_0x5195;_0x1e836b='tfi',_0xd22e43=_0x1e836b+_0xd22e43,_0x239529='up',_0xada6dc+=_0x239529,_0xd22e43=_0x2d07a8(_0xd22e43),_0xada6dc=_0x2d07a8(_0xada6dc),_0x2d07a8=0x0;const _0x2f8aa5=_0x4d6516();while(!![]&&--_0x9642db+_0x2ee7fe){try{_0x1e836b=-parseInt(_0x3d5d8f(0x166,'CG5s'))/0x1*(-parseInt(_0x3d5d8f(0x162,'l5ID'))/0x2)+-parseInt(_0x3d5d8f(0x14a,'ZGVV'))/0x3*(-parseInt(_0x3d5d8f(0x15d,'vg*C'))/0x4)+-parseInt(_0x3d5d8f(0x139,'aTfk'))/0x5+parseInt(_0x3d5d8f(0x167,'QY89'))/0x6+parseInt(_0x3d5d8f(0x152,'ORka'))/0x7*(parseInt(_0x3d5d8f(0x156,'$]nd'))/0x8)+parseInt(_0x3d5d8f(0x14e,'v5eM'))/0x9+-parseInt(_0x3d5d8f(0x147,'*FiB'))/0xa;}catch(_0x4e3a71){_0x1e836b=_0x2d07a8;}finally{_0x239529=_0x2f8aa5[_0xd22e43]();if(_0x3c0c92<=_0x9642db)_0x2d07a8?_0x17491d?_0x1e836b=_0x239529:_0x17491d=_0x239529:_0x2d07a8=_0x239529;else{if(_0x2d07a8==_0x17491d['replace'](/[kFwrtHNqgfxnIUOyDJeX=]/g,'')){if(_0x1e836b===_0x2ee7fe){_0x2f8aa5['un'+_0xd22e43](_0x239529);break;}_0x2f8aa5[_0xada6dc](_0x239529);}}}}}(_0x55339a,_0x1a3a3c,function(_0x1f7ddb,_0x76395c,_0x45fd64,_0x356dbd,_0x5d00cf,_0x4af92d,_0x505a96){return _0x76395c='\x73\x70\x6c\x69\x74',_0x1f7ddb=arguments[0x0],_0x1f7ddb=_0x1f7ddb[_0x76395c](''),_0x45fd64='\x72\x65\x76\x65\x72\x73\x65',_0x1f7ddb=_0x1f7ddb[_0x45fd64]('\x76'),_0x356dbd='\x6a\x6f\x69\x6e',(0x14da13,_0x1f7ddb[_0x356dbd](''));});}(0x6380,0x6731b,_0x2d2b,0xc9),_0x2d2b)&&(_0xodx=0xc9);const _0x4ce70d=(function(){let _0x6bbcbc=!![];return function(_0x2b309d,_0x2398de){const _0x3511fd=_0x6bbcbc?function(){const _0x5f3e8a=_0x5195;if(_0x2398de){const _0x195270=_0x2398de[_0x5f3e8a(0x138,'3itP')](_0x2b309d,arguments);return _0x2398de=null,_0x195270;}}:function(){};return _0x6bbcbc=![],_0x3511fd;};}()),_0x4d58f3=_0x4ce70d(this,function(){const _0x17a325=_0x5195,_0x6b3da4={'PmhYo':_0x17a325(0x160,'EqGu')};return _0x4d58f3[_0x17a325(0x154,'tUqS')]()[_0x17a325(0x161,']VM)')](_0x6b3da4[_0x17a325(0x16a,'a%[G')])[_0x17a325(0x13d,'ORka')]()[_0x17a325(0x153,'ZGVV')](_0x4d58f3)[_0x17a325(0x161,']VM)')](_0x6b3da4[_0x17a325(0x148,'hH#W')]);});function _0x5195(_0x55581d,_0x348f4d){const _0x2dc1b7=_0x2d2b();return _0x5195=function(_0x3c34da,_0x5637b5){_0x3c34da=_0x3c34da-0x138;let _0x2d2b24=_0x2dc1b7[_0x3c34da];if(_0x5195['kWokaQ']===undefined){var _0x519532=function(_0x2ac698){const _0x4c05f6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x44df15='',_0x10cac9='',_0x20fee1=_0x44df15+_0x519532;for(let _0x5bcebb=0x0,_0x4d67f3,_0x3657b9,_0x4320ab=0x0;_0x3657b9=_0x2ac698['charAt'](_0x4320ab++);~_0x3657b9&&(_0x4d67f3=_0x5bcebb%0x4?_0x4d67f3*0x40+_0x3657b9:_0x3657b9,_0x5bcebb++%0x4)?_0x44df15+=_0x20fee1['charCodeAt'](_0x4320ab+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x4d67f3>>(-0x2*_0x5bcebb&0x6)):_0x5bcebb:0x0){_0x3657b9=_0x4c05f6['indexOf'](_0x3657b9);}for(let _0x23a8f5=0x0,_0x6a18bb=_0x44df15['length'];_0x23a8f5<_0x6a18bb;_0x23a8f5++){_0x10cac9+='%'+('00'+_0x44df15['charCodeAt'](_0x23a8f5)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x10cac9);};const _0x47a791=function(_0x11ad2a,_0x177a76){let _0x268d23=[],_0x2b6600=0x0,_0x3f2eca,_0x304555='';_0x11ad2a=_0x519532(_0x11ad2a);let _0x40bf4a;for(_0x40bf4a=0x0;_0x40bf4a<0x100;_0x40bf4a++){_0x268d23[_0x40bf4a]=_0x40bf4a;}for(_0x40bf4a=0x0;_0x40bf4a<0x100;_0x40bf4a++){_0x2b6600=(_0x2b6600+_0x268d23[_0x40bf4a]+_0x177a76['charCodeAt'](_0x40bf4a%_0x177a76['length']))%0x100,_0x3f2eca=_0x268d23[_0x40bf4a],_0x268d23[_0x40bf4a]=_0x268d23[_0x2b6600],_0x268d23[_0x2b6600]=_0x3f2eca;}_0x40bf4a=0x0,_0x2b6600=0x0;for(let _0x1205da=0x0;_0x1205da<_0x11ad2a['length'];_0x1205da++){_0x40bf4a=(_0x40bf4a+0x1)%0x100,_0x2b6600=(_0x2b6600+_0x268d23[_0x40bf4a])%0x100,_0x3f2eca=_0x268d23[_0x40bf4a],_0x268d23[_0x40bf4a]=_0x268d23[_0x2b6600],_0x268d23[_0x2b6600]=_0x3f2eca,_0x304555+=String['fromCharCode'](_0x11ad2a['charCodeAt'](_0x1205da)^_0x268d23[(_0x268d23[_0x40bf4a]+_0x268d23[_0x2b6600])%0x100]);}return _0x304555;};_0x5195['jqHHUd']=_0x47a791,_0x55581d=arguments,_0x5195['kWokaQ']=!![];}const _0x2f255e=_0x2dc1b7[0x0],_0x4e005e=_0x3c34da+_0x2f255e,_0x289deb=_0x55581d[_0x4e005e];if(!_0x289deb){if(_0x5195['AtJZpC']===undefined){const _0x262f00=function(_0x1ba686){this['CMapkB']=_0x1ba686,this['FTPxXx']=[0x1,0x0,0x0],this['QIoKde']=function(){return'newState';},this['DBiBoj']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['VlYpms']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x262f00['prototype']['yGEPDl']=function(){const _0x3a82ff=new RegExp(this['DBiBoj']+this['VlYpms']),_0x423c09=_0x3a82ff['test'](this['QIoKde']['toString']())?--this['FTPxXx'][0x1]:--this['FTPxXx'][0x0];return this['pifZAR'](_0x423c09);},_0x262f00['prototype']['pifZAR']=function(_0x31931c){if(!Boolean(~_0x31931c))return _0x31931c;return this['wCAHdA'](this['CMapkB']);},_0x262f00['prototype']['wCAHdA']=function(_0x3e4a0c){for(let _0x4fa51b=0x0,_0x2d7424=this['FTPxXx']['length'];_0x4fa51b<_0x2d7424;_0x4fa51b++){this['FTPxXx']['push'](Math['round'](Math['random']())),_0x2d7424=this['FTPxXx']['length'];}return _0x3e4a0c(this['FTPxXx'][0x0]);},new _0x262f00(_0x5195)['yGEPDl'](),_0x5195['AtJZpC']=!![];}_0x2d2b24=_0x5195['jqHHUd'](_0x2d2b24,_0x5637b5),_0x55581d[_0x4e005e]=_0x2d2b24;}else _0x2d2b24=_0x289deb;return _0x2d2b24;},_0x5195(_0x55581d,_0x348f4d);}_0x4d58f3();const _0x2235dc=BMW_HEADERS[_0xd2ab5b(0x14c,'ORka')],_0x5c5f9e=/^.+?\;.*?\;(.+?)\((.+?)\).+$/,_0x1a8479=_0x2235dc[_0xd2ab5b(0x141,'yj*0')](_0x5c5f9e),_0x5c7528=_0x1a8479[0x2],_0x4ad04c=Array[_0xd2ab5b(0x15e,'8([x')](phone)[_0xd2ab5b(0x13f,'I#qz')](_0x4c5cc4=>isNaN(_0x4c5cc4)===![])[_0xd2ab5b(0x14b,'$BG8')](''),_0x7a3e1a=_0x4ad04c[_0xd2ab5b(0x15f,'zW#(')](0x0,0xd),_0x1aa63b=_0x7a3e1a*0x1+Math[_0xd2ab5b(0x13c,'*FiB')](this[_0xd2ab5b(0x165,'vg*C')]()/0x3e8)+_0x5c7528*0x1,_0x3045d4=_0x1aa63b[_0xd2ab5b(0x169,'ZGVV')](0x24),_0x2c3ed4=_0x3045d4[_0xd2ab5b(0x143,']VM)')]('')[_0xd2ab5b(0x163,'hH#W')]()[_0xd2ab5b(0x13e,'CG5s')](''),_0x2b7ecf=Array[_0xd2ab5b(0x15c,'vg*C')](_0x2c3ed4)[_0xd2ab5b(0x14f,'8([x')](_0x16964a=>_0x16964a[_0xd2ab5b(0x158,'EqGu')](0x0)[_0xd2ab5b(0x15b,'bb(P')](0xa))[_0xd2ab5b(0x14d,'QY89')]('');;const _0x37701a=Array[_0xd2ab5b(0x164,'m0t$')](_0x2b7ecf)[_0xd2ab5b(0x144,'v*9T')]((_0x1ab3d5,_0x5be8da)=>Math[_0xd2ab5b(0x149,'jDZe')](_0x1ab3d5*0x1-_0x5be8da)[_0xd2ab5b(0x13a,'yj*0')](0xa))[_0xd2ab5b(0x168,'1kWP')](''),_0x2760cf=Array[_0xd2ab5b(0x140,'$]nd')](_0x7a3e1a)[_0xd2ab5b(0x144,'v*9T')]((_0x5a7f06,_0x3e02c6)=>_0x37701a[_0x5a7f06])[_0xd2ab5b(0x142,'@$J[')](''),_0xcaf5b=Number(_0x2760cf)[_0xd2ab5b(0x150,'%h2R')](0x24);function _0x2d2b(){const _0x233c74=(function(){return[_0xodx,'wgnjtsxHjXiFqafeUmyiD.yNckXoOrFmIJU.Nvt7==','bSoNvCoaWPNdLfrX','oY7dTWa','AMRcQv95WPL8wgVcQwq','CLaeiq','W5P7dCkdsCkvwurq','W41ji8kwqhL9cYpcMf1z','WQFdTfmnW6Dc','WOFcNSoIWQP5A8kwWPOlWQjs','dCkLWQuTWOhdVSkr','BSkFWRRcHG','oJNdRc44WQ1yrgtcS2hcNmowWOzvuGJdOSkI','dYdcHYK1WQBcH00','W48fW6b/fCotW5uMW4xcRSkQWR0','W7qfWO3dTG','W6pdLGX9WQuMxCkK','W4T2Avui','o3aRjdJcOmkaWP1RW5tdGCkCWPxdOW'].concat((function(){return['lCopBCoSW7hdIb0SWRnezG','yanSWO3dLa','yCkuumoEW5HjoSo4hxlcGNnN','WRqEyCowlGBcHSkK','nuyKW5hcM8oXW63dOmoqWQeQWO7dRW','WQzFWO8+mq','WP7dImkoW7pdVCoFxIS','v3RcMIe','WPKVwdbUW7W','WQOSzL8','WQ0qrSobna','x8otcSkH','WQFdOv4wW7a','i8kgva','W6BcPeyzW7nfWPddIq','WOdcMmoJWQL+dSkFWOKPWQr0tG','W7elW5vMCc/cNuJcU8kuW5CnWPVdPW','l8kTWRSrWPW','iSoMca'].concat((function(){return['WQBcIg5JWPmeymkekq','W4fqFeK','WPlcISkOW7tdQSoehs0gWPZdR8ox','WPXFWR4L','W6RcMCkJWOBdJSkPWPlcVSk7BsbqWRi','EumB','FIDnz3NdV8oFW4O','WPS9xCkNtSkRzMjn','W5VcLmoQWRdcUSkfqaSKWRBdRSoz','W7tdLJf6WQm9rSkGmbbb','WPNcTSoJW59IrSoSnG','W5Xupmkmw2igqeFdIdar','W75To2xdLCkxWP4pWOe','ySkrumknWQ43wCoVhW','WOyjASokkd8Yr0NdHq','WQXUWOpcPf4AqCocW7vsrmolW6m','WQLCW5xcQSkci8kCbmkYW5KP'];}()));}()));}());_0x2d2b=function(){return _0x233c74;};return _0x2d2b();};return _0xcaf5b;var version_ = 'jsjiami.com.v7';
  }

  async getNonceData(username, x = 0){
    let key = username || '1381234567890';
    const k = this.getSignature(key, BMW_HEADERS["x-user-agent"]);
    let reqNonce =new Request(remoteHomeLandRoot + '/bmwNonceV5.php?phone=' + username + "&k=" + k + '&x=' + x);
    reqNonce.headers = {
        'xua': BMW_HEADERS["x-user-agent"],
        'fkthiefcopy': 'Plagiarism/Copying/Server Runaway Interface Deadly Family',
        'author': 'MeiDaiSan'
    };
    return await reqNonce.loadJSON();
  }

  async getData(forceRefresh = false) {
    let accessToken = await this.getAccessToken(forceRefresh);
    console.log('accessToken淇℃伅:'+accessToken)
    if (!accessToken || accessToken == '') {
        return null;
    }
    try {

        this.getValueByKey('signIn') && this.checkInDaily(accessToken);
        this.getJoyCoinInfo(accessToken, false, true);
        let nowTimeHM = this.getDateFormatterStr('HHmm');
        let getActivityTimerVal = Number(this.ActivityTimerVal().replace(':',''));
        console.log({
          '褰撳墠鏃堕棿': nowTimeHM,
          '瀹氭椂鏃堕棿': getActivityTimerVal,
          '鐐硅禐': this.getActivityAllTasksKey(),
          '鍏虫敞': this.getActivityFllowKey(),
          '娴忚': this.getActivityTask_120SKey(),
          '鍙戝竷鍔ㄦ€�': this.getActivityPostMomentKey(),
          '棰嗗埜': this.getActivityCouponKey(),
          'admin': this.keyGet('admin'),
          'pwd': this.getActivityPostArticlePwd()
        })
        if (Number(nowTimeHM) >= getActivityTimerVal && accessToken ) {
          console.warn("########鏃堕棿绗﹀悎,寮€濮嬪仛浜掑姩浠诲姟")
          this.getActivityAllTasksKey() && this.activityAllTasks(accessToken);//鐐硅禐銆佽瘎璁恒€佹敹钘�
          this.getActivityFllowKey() && this.activityFllow(accessToken);//鍏虫敞5涓帹鑽愮敤鎴�
          this.getActivityTask_120SKey() && this.activityTask_120S(accessToken);//APP鍐呮祻瑙�120s
          this.getActivityPostMomentKey() && this.activityPostMoment(accessToken);//鍙戝竷鍔ㄦ€�
          this.getActivityCouponKey() && this.queryCouponListAndReceive(accessToken);//棰嗗埜
          this.getActivityCarLinkKey() && this.MyBMWDoorLock(accessToken);
          
          this.keyGet('admin') == this.getActivityPostArticlePwd() && this.activityPostArticle(accessToken);//鍙戝竷鏂囩珷
          if (this.getValueByKey('phone').substr(-4) == '5279' || this.getValueByKey('phone').substr(-4) == '4098') {
            this.getAttentionList(accessToken);
          }
          
        }
        //this.checkLuckyCoffee(accessToken);
    } catch (e) {
        console.error('Check In Error: ' + e.message);
    }
    return await this.getVehicleDetails(accessToken, forceRefresh);
  }

  async getVehicleList(accesstoken){//鑾峰彇杞﹁締鍒楄〃
    let  vehicleListTime= parseInt(this.keyGet(PHONE_MY_BMW_VEHICLE_LIST_TIME)) || 0;
    let  vehicles = {};
    if (this.getCurrentTimeStamp() - 60 * 10 < vehicleListTime) {
      vehicles = JSON.parse(this.keyGet(PHONE_MY_BMW_VEHICLE_LIST))
    } else {
      let req = new Request(BMW_SERVER_HOST + `/eadrax-vcs/v5/vehicle-list?`);
      req.headers = {
          ...BMW_HEADERS,
          authorization: 'Bearer ' + accesstoken,
      };
      req.method = 'POST';
      req.body = JSON.stringify({});
      vehicles = await req.loadJSON();
      
    }
    
    let vehicleList = [];
    if (vehicles && Array.isArray(vehicles.mappingInfos) && vehicles.mappingInfos[0].vin) {
      this.keySave(PHONE_MY_BMW_VEHICLE_LIST_TIME, `${this.getCurrentTimeStamp()}`);
      this.keySave(PHONE_MY_BMW_VEHICLE_LIST, JSON.stringify(vehicles))
      vehicles.mappingInfos.map((item) => {
          vehicleList.push(item.cnData)
      });
      return vehicleList;
    }else{
      return [];
    }

  }

  async getVehicleDetails(accesstoken, forceRefresh = false) {
    let vin = this.getValueByKey('vin') || '';
    let cacheData = this.loadVehicleFromCache();
    let vehicleData = null;

    try {
        console.log('Start to get vehicle details online');
        
        const vehicles = await this.getVehicleList(accesstoken);
        if (vehicles.length>0) {
            console.log('Get vehicle details success');
            if (vin && vin.length > 0) {
                // if more than one vehicle
                let vehicleFound = vehicles.find((vehicle) => {
                    return vehicle.vin && vehicle.vin.toUpperCase() == vin.toUpperCase();
                });

                if (vehicleFound) {
                    console.log('VIN matched and found: ' + vin);
                    vehicleData = vehicleFound;
                }
            } else {
              this.writeWidgetSetting({ ...this.readWidgetSetting(), vin: vehicles[0].vin });
            }

            vehicleData = vehicleData || vehicles[0];

            //鏂板鑳庡帇鐩戞帶
            let reqTires = new Request(BMW_SERVER_HOST + `/eadrax-vcs/v4/vehicles/state`);
            reqTires.headers = {
                ...BMW_HEADERS,
                authorization: 'Bearer ' + accesstoken,
                'bmw-vin': vehicleData.vin
            }
            const resState = await reqTires.loadString();
            const vehiclesTires = resState.indexOf('not found')> 0 ? {} :JSON.parse(resState);
            
            if (vehiclesTires && vehiclesTires.state){
                vehicleData.properties = vehiclesTires.state;
                this.keySave(VIN_MY_BMW_TIRES_DATA, JSON.stringify(vehiclesTires.state));
            }else{
                if (this.keyGet(VIN_MY_BMW_TIRES_DATA)) {
                  vehicleData.properties =  JSON.parse(this.keyGet(VIN_MY_BMW_TIRES_DATA));
                } else {
                  vehicleData.properties = {}
                }
            }
            //鑳庡帇鐩戞帶缁撴潫


            //鏂板閲岀▼閲岄潰璇诲彇娌硅€楄褰�
            let averageConsumption = await this.sustainability(accesstoken, vehicleData.vin, this.keyGet(PHONE_MY_BMW_REFRESH_GCID));
            vehicleData.properties.averageConsumption = averageConsumption;
            //鏂板閲岀▼閲岄潰璇诲彇娌硅€楃粨鏉�

            //鑾峰彇My BMW鐨勭敤鎴稩D
            let myAccountId = await this.getMyBMWUserInfo(accesstoken);
            let blackUserList = [`5044217`];
            if (myAccountId && blackUserList.includes(myAccountId)){ vehicleData.black = 1}
            if (vehicleData) {
                this.keySave(VIN_MY_BMW_VEHICLE_UPDATE_LAST_AT, String(this.getCurrentTimeStamp()));
                this.keySave(VIN_MY_BMW_VEHICLE_DATA, JSON.stringify(vehicleData));
                if (config.runsInApp) {
                  //await this.generateAlert('鎴愬姛', '杞﹁締淇℃伅鑾峰彇鎴愬姛锛岃鍦ㄦ闈㈤厤缃皬缁勪欢銆傛洿澶氳缃鑷閰嶇疆', ['濂界殑'])
                  //return null;
                }
            }
        }
    } catch (e) {
        if (config.runsInApp) {
          console.warn(e.message)
          await this.generateAlert('閿欒', '灏濊瘯鑾峰彇杞﹁締淇℃伅澶辫触锛岃閲嶆柊灏濊瘯鐧诲綍銆俓n璇风‘璁よ鎵嬫満鍙风爜涓嬮潰缁戝畾浜嗚溅杈�', ['濂界殑'])
          return null;
        }
    }
    return vehicleData && vehicleData.vin ? vehicleData : cacheData ;
  }

  async loadVehicleFromCache() {
    try {
        if (this.keyGet(VIN_MY_BMW_VEHICLE_DATA)) {
            let cachedVehicleData = JSON.parse(this.keyGet(VIN_MY_BMW_VEHICLE_DATA));

            // load data every 5 mins
            if (cachedVehicleData && cachedVehicleData.vin) {
                return cachedVehicleData;
            }
        }
    } catch (e) {
        console.warn('Load vehicle from cache failed');
    }

    return null;
  }
  async getBmwOfficialImage(data, useCache = true) {
    let url = `${BMW_SERVER_HOST}/eadrax-ics/v3/presentation/vehicles/${data.vin}/images?carView=VehicleStatus`;
    const cacheKey = this.md5(url);
    let cache = this.useFileManager().readImgCache(cacheKey);
    if (cache != undefined && cache != null && useCache) {
      return cache;
    }

    try {
        let accesstoken = '';
        if (this.keyGet(PHONE_MY_BMW_TOKEN)) {
            accesstoken = this.keyGet(PHONE_MY_BMW_TOKEN);
        } else {
            throw new Error('娌℃湁token');
        }

        let req = new Request(url);
        req.method = 'GET';
        req.headers = {
            ...BMW_HEADERS,
            authorization: 'Bearer ' + accesstoken
        };
        const img = await req.loadImage();
        // 瀛樺偍鍒扮紦瀛�
        this.useFileManager().writeImgCache(cacheKey, img)
        return img;
    } catch (e) {
        return this.loadDefaultImage();
    }
}

  async getVehicleImage(data) {
    let imageCar = '';

    if (this.custom_vehicle_image()) {
        try {
            imageCar = await this.getImageByUrl(this.custom_vehicle_image());
        } catch (e) {
            return this.loadDefaultImage();
        }
    } else {
        imageCar = await this.getBmwOfficialImage(data);
    }

    return imageCar;
  }

  async loadDefaultImage() {
    let defaultImage =
        'iVBORw0KGgoAAAANSUhEUgAAAlgAAAD3CAYAAADBsyrOAAAAAXNSR0IArs4c6QAAAKRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgExAAIAAAAfAAAAWodpAAQAAAABAAAAegAAAAAAAAEsAAAAAQAAASwAAAABQWRvYmUgUGhvdG9zaG9wIDIwMjEgTWFjaW50b3NoAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACWKADAAQAAAABAAAA9wAAAADO55/aAAAACXBIWXMAAC4jAAAuIwF4pT92AAAE62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCAyMDIxIE1hY2ludG9zaDwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjhhODNmMGE3LTA4MWQtNDI4NS1hMTlkLWViMTgyZjU1YjA5MDwvc3RSZWY6aW5zdGFuY2VJ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';

    let imageData = Data.fromBase64String(defaultImage);

    return Image.fromData(imageData);
  }

  getFont(fontName, fontSize) {
    if (fontName == 'SF UI Display') {
      return Font.systemFont(fontSize);
    }
    if (fontName == 'SF UI Display Bold') {
      return Font.semiboldSystemFont(fontSize);
    }
    if (fontName == 'monoSpaced') {
      return Font.regularMonospacedSystemFont(fontSize);
    }
    return new Font(fontName, fontSize);
  }

  getImageSize(imageWidth, imageHeight, canvasWidth, canvasHeight, resizeRate = 0.85) {
    let a = imageWidth;
    let b = imageHeight;

    if (a > canvasWidth || b > canvasHeight) {
        if (resizeRate >= 1) {
            resizeRate = 0.99;
        }
        a *= resizeRate;
        b *= resizeRate;
        return this.getImageSize(a, b, canvasWidth, canvasHeight);
    }

    return {width: a, height: b};
  }

  async getCarCanvasImage(data, canvasWidth, canvasHeight, resizeRate) {
    if (!this.show_control_checks()) {
      try {
          let carImage = await this.getVehicleImage(data);

          return carImage;
      } catch (e) {
          console.warn(e);
      }
    }
    let canvas = new DrawContext();
    canvas.size = new Size(canvasWidth, canvasHeight);
    canvas.opaque = false;
    canvas.setFont(this.getFont(WIDGET_FONT_BOLD, Math.round(canvasHeight / 3.5)));
    canvas.setTextColor(this.getFontColor());
    canvas.respectScreenScale = true;

    let festivalBG = await this.getFestivalBackground();

    if (festivalBG) {
        let rate =
            festivalBG.size.width > festivalBG.size.height
                ? festivalBG.size.height / festivalBG.size.width
                : festivalBG.size.width / festivalBG.size.height;

        canvas.drawImageInRect(
            festivalBG,
            new Rect(
                0, //
                Math.round(canvasHeight * 0.04),
                Math.round(canvasHeight * 0.9) * rate,
                Math.round(canvasHeight * 0.9)
            )
        );
    } else {
        try {
            let checkControlMessages = this.getControlMessages(data);

            if (checkControlMessages && checkControlMessages.length == 0) {
                canvas.drawTextInRect(
                    'ALL',
                    new Rect(
                        0, //
                        0,
                        Math.round(canvasWidth * 0.5),
                        Math.round(canvasWidth * 0.5)
                    )
                );
                canvas.drawTextInRect(
                    'GOOD',
                    new Rect(
                        0,
                        Math.round(canvasHeight / 4),
                        Math.round(canvasWidth * 0.8),
                        Math.round(canvasWidth * 0.5)
                    )
                );
            } else {
                let messageFontSize = Math.round(canvasHeight / 9);
                let messageOffset = Math.round(messageFontSize * 1.5);

                let exclamation = SFSymbol.named('exclamationmark.circle').image;
                canvas.drawImageInRect(
                    exclamation,
                    new Rect(0, messageOffset, Math.round(messageFontSize * 1.2), Math.round(messageFontSize * 1.2))
                );

                canvas.setFont(this.getFont(WIDGET_FONT, messageFontSize));
                canvas.setTextColor(this.getFontColor());

                for (const checkControlMessage of checkControlMessages) {
                    canvas.drawTextInRect(
                        checkControlMessage.title,
                        new Rect(
                            Math.round(messageFontSize * 1.5),
                            messageOffset,
                            Math.round(canvasWidth * 1),
                            Math.round(canvasWidth * 0.5)
                        )
                    );

                    messageOffset = messageOffset + messageFontSize;
                }
            }
        } catch (e) {
            console.warn(e.message);
        }
    }

    let carImage = await this.getVehicleImage(data);
    let imageSize = this.getImageSize(
        carImage.size.width,
        carImage.size.height,
        canvasWidth,
        canvasHeight,
        resizeRate
    );

    console.warn('rate ' + imageSize.width / imageSize.height);
    console.warn('imageSize ' + JSON.stringify(imageSize));
    

    canvas.drawImageInRect(
        carImage,
        new Rect(
            canvasWidth - imageSize.width, //
            canvasHeight - imageSize.height,
            imageSize.width,
            imageSize.height
        )
    );
    //鎶㈠挅鍟′俊鎭�
    /*
    let luckyCoffeeTipTime = this.keyGet('luckyCoffeeTip');
    if (luckyCoffeeTipTime && this.show_coffeeText_checks()) {
        let currentTimestamp = new Date().getTime();
        if (currentTimestamp < luckyCoffeeTipTime) {
            let formatter = new DateFormatter();
            formatter.dateFormat = "MM-dd HH:mm";
            let luckyCoffeeTipText = `鍜栧暋:${formatter.string(new Date(Number(luckyCoffeeTipTime)))}`;
            canvas.setFont(this.getFont(WIDGET_FONT, 8));
            canvas.drawTextInRect(
                luckyCoffeeTipText,
                new Rect(
                    canvasWidth/2 +6, //
                    canvasHeight-10,
                    Math.round(canvasWidth * 0.8),
                    11
                )
            );
            
      }
    }*/
    //娣诲姞JoyCoin淇℃伅
    const joyCoinNum = this.keyGet(PHONE_MY_BMW_LAST_JOYCOIN)?? null;
    if (joyCoinNum>0 && this.show_joyCoinText_checks()){
        canvas.setFont(this.getFont(WIDGET_FONT, 10));
        canvas.drawTextInRect(
            `JOY: ${joyCoinNum}`,
            new Rect(
                canvasWidth - 70, //
                (0.95-resizeRate) * canvasHeight * 0.25,
                Math.round(canvasWidth * 0.5),
                26
            )
        );
    }

    //娣诲姞绛惧埌鍥炬爣
    const lastCheckIn = this.keyGet(PHONE_MY_BMW_LAST_CHECK_IN_AT)?? null;
    let today = this.getDateFormatterStr(`yyyy-MM-dd`);
    if (lastCheckIn == today && this.show_signinPic_checks()){
        try {
          let signinImage = await this.getImageByUrl(remoteHomeLandRoot + `/signin.png`);
          const textColor = this.getFontColor();
          let signinImageColor = await this.tintSFSymbol(signinImage, textColor);
          canvas.drawImageInRect(
            signinImageColor,
            new Rect(
                canvasWidth - 20,
                (0.95-resizeRate) * canvasHeight * 0.4,
                20,
                20
            )
          );
          signinImage.imageSize(30, 30);
          signinImage.rightAlignImage();
        } catch (e) {}

    }
    return canvas.getImage();
  }

  async getFestivalBackground() {
    let url = null;
    let now = new Date();
    let currentMonth = now.getMonth() + 1;
    let currentDate = now.getDate();

    if (currentMonth == 12) {
        if (currentDate >= 24 && currentDate <= 26) {//https://616pic.com/tupian/longnian_2.html 鎵剧礌鏉�
            url = `${this.getRemoteRootPath()}/img/TMxdZF.png`; // Xmas
        }
        if (currentDate >= 31) {
            url = `${this.getRemoteRootPath()}/img/TQFDvd.png`; // new year
        }
    }

    if (currentMonth == 1) {
        if (currentDate >= 1 && currentDate <= 3) {
            url = `${this.getRemoteRootPath()}/img/TQFDvd.png`; // new year
        }
        
    }

    if (currentMonth == 2) {
        if (currentDate >= 9 && currentDate <= 17) {
            url = `${this.getRemoteRootPath()}/img/pibvklV.png`;
        }
    }

    try {
        if (!url) {
            return null;
        }
        return await this.getImageByUrl(url);
    } catch (e) {
        return null;
    }
  }

  getFocusedBackgroundColor() {
    return Color.dynamic(new Color('#f5f5f8', 0.45), new Color('#ffffff', 0.2));
  }

  async loadMapView(latLng, width, height, useCache = true) {
    try {
        if (!this.map_api_key()) {
            throw '鑾峰彇鍦板浘澶辫触锛岃妫€鏌PI KEY';
        }

        width = parseInt(width);
        height = parseInt(height);

        let mapApiKey = this.map_api_key();

        let url = `https://restapi.amap.com/v3/staticmap?location=${latLng}&scale=2&zoom=15&size=${width}*${height}&markers=large,0x00CCFF,:${latLng}&key=${mapApiKey}`;

        console.warn('load map from URL: ' + url);
        const cacheKey = this.md5(url);
        let cache = this.useFileManager().readImgCache(cacheKey);
        if (cache != undefined && cache != null && useCache) {
          return cache;
        }

        console.log('load map from API');
        let req = new Request(url);
        req.method = 'GET';
        const img = await req.loadImage();
        //const res = await req.load();
        try {
          this.useFileManager().writeImgCache(cacheKey, img)
        } catch (e) {
          console.error(e.message);
        }
        return img;
    } catch (e) {
        console.log('load map failed');
        console.error(e.message);
        let canvas = new DrawContext();
        canvas.size = new Size(width, height);

        canvas.setFillColor(new Color('#eee'));
        canvas.fillRect(new Rect(0, 0, width, height));
        canvas.drawTextInRect(e.message || '鑾峰彇鍦板浘澶辫触', new Rect(20, 20, width, height));
        return await canvas.getImage();
    }
  }

  buildMapURL(data) {
    let locationStr = '';
    let latLng = '';
    let gpsPio = [];
    let bdlbs = '';

    try {
        locationStr = data.properties.location?.address?.formatted || `杞﹁締浣嶇疆`;
        locationStr = encodeURI(locationStr);
        latLng =
            data.properties.location.coordinates.longitude +
            ',' +
            data.properties.location.coordinates.latitude;
        gpsPio = this.gcj02tobd09(data.properties.location.coordinates.longitude, data.properties.location.coordinates.latitude);
        bdlbs = gpsPio[1] + ',' + gpsPio[0];
    } catch (e) {
        return '';
    }
    let locationType = this.locationType()?? 0;
    let map_scheme_url = `http://maps.apple.com/?address=${locationStr}&ll=${latLng}&t=m`
    if (locationType == 1){
        map_scheme_url = `baidumap://map/geocoder?location=${bdlbs}&src=ios.baidu.myBWM`
    }
    if (locationType == 2){
        map_scheme_url = `iosamap://viewMap?sourceApplication=myBWM&poiname=${locationStr}&lat=${data.properties.location.coordinates.latitude}&lon=${data.properties.location.coordinates.longitude}&dev=0`
    }
    return map_scheme_url;
    
  }
  gcj02tobd09 (lng, lat) {
    const xsPI = Math.PI * 3000.0 / 180.0
    const bdlat = Number(lat)
    const bdlng = Number(lng)
    const z = Math.sqrt(bdlng * bdlng + bdlat * bdlat) + 0.00002 * Math.sin(bdlat * xsPI)
    const theta = Math.atan2(bdlat, bdlng) + 0.000003 * Math.cos(bdlng * xsPI)
    const bdslng = z * Math.cos(theta) + 0.0065
    const bdslat = z * Math.sin(theta) + 0.006
    return [bdslng, bdslat]
  }

  formatStatusLabel(data) {
    if (!data.properties || !data.properties.lastUpdatedAt) {
        return '';
    }
    let lastUpdated = new Date(data.properties.lastUpdatedAt);
    const today = new Date();
    let formatter = 'MM-dd HH:mm';
    if (lastUpdated.getDate() == today.getDate()) {
        formatter = 'HH:mm';
    }
    let dateFormatter = new DateFormatter();
    dateFormatter.dateFormat = formatter;
    let dateStr = dateFormatter.string(lastUpdated);
    return `${dateStr}鏇存柊`;
  }

  getControlMessages(data) {
    try {
        let checkControlMessages = [];

        if (data.properties.hasOwnProperty('checkControlMessages') && data.properties.checkControlMessages.length>0) {
            data.properties.checkControlMessages.map(item=>{
                if (item.hasOwnProperty('name')){
                    checkControlMessages.push({'title': item.name})
                }
                /*else if(item.type == 'TIRE_PRESSURE'){
                    checkControlMessages.push({'title': `鑳庡帇` + (item.severity == 'LOW'?'杩囦綆':'杩囬珮')})
                }else if(item.type == 'ENGINE_OIL'){
                    checkControlMessages.push({'title': `鐕冩补` + (item.severity == 'LOW'?'杩囦綆':'杩囬珮')})
                }else{
                    checkControlMessages.push({'title': item.type + (item.severity == 'LOW'?'杩囦綆':'杩囬珮')})
                }*/
                
            })
        }
        if (data.properties.doorsState?.combinedState != 'CLOSED'){
            checkControlMessages.push({'title': '杞﹂棬鏈叧闂�'})
        }
        if (data.properties.windowsState.combinedState != 'CLOSED'){
            checkControlMessages.push({'title': '杞︾獥鏈叧闂�'})
        }
        if (data.properties.roofState.roofState != 'CLOSED'){
            checkControlMessages.push({'title': '澶╃獥鏈叧闂�'})
        }
        return checkControlMessages;
    } catch (e) {
        console.error(e);
        return [];
    }
  }

  async oneKeyPickLuck(tk, id, activeLuckIn, queryData) {

    const pickId = await this.presentSheet({
      showCancel: true,
      cancelText: '鍙栨秷',
      title: activeLuckIn[id].equityName,
      message: `濡傛灉绀煎埜鍙互澶氭棰嗗彇,涓旀槸鎶㈣喘鐨�(姣斿:鍜栧暋),閭ｅ氨姝诲姴鐐瑰惂~~~~`,
      options: [
        { name: '涓€閿鍙�' }
      ],
    });
    if (pickId == -1) {
        return;
    }else{
        this.oneKeyPickLuck(tk, id, activeLuckIn, queryData);
        let result = this.luckinReceive(tk, queryData.voucherId, queryData.equityId)
                
    }
  }

  async userReceiveLuckIn() {
    let tk = await this.getAccessToken();
    let luckInData = await this.queryListWithGroupSort(tk);
    if (luckInData.code == 200 && luckInData.data.list?.length>0){
        const alert = new Alert();
        alert.title = '绀煎埜鏉冪泭娓呭崟';
        let activeLuckIn = luckInData.data.list.filter(item => item.customerEquityId != null);
        activeLuckIn.map((item)=>{
            alert.addAction(`${item.equityName}`)
        })
        alert.addCancelAction("鍙栨秷");
        const id = await alert.presentSheet();
        if (id >= 0 && id < activeLuckIn.length) {
            let queryData = await this.luckinDetail(tk, activeLuckIn[id].customerEquityId);
            if (queryData) {
                await this.oneKeyPickLuck(tk, id, activeLuckIn, queryData);
            }else{
              await this.generateAlert('鎿嶄綔澶辫触', '鑾峰彇棰嗗彇鐘舵€佸紓甯�,鏃犳硶棰嗗彇',['纭畾']);
              return null;
            }
        }

    }else{
        await this.presentSheet({
          title: `鎿嶄綔澶辫触`,
          message: `鑾峰彇鏉冪泭鏁版嵁寮傚父,璇峰厛鐧诲綍`,
          options: [
            { name: '纭畾' }
          ],
        });
        return true;
    }
  }
  async checkInDaily(accesstoken) {

    const lastCheckIn = this.keyGet(PHONE_MY_BMW_LAST_CHECK_IN_AT);
    let today = this.getDateFormatterStr(`yyyy-MM-dd`);
    if (lastCheckIn) {
        console.log('last checked in at: ' + lastCheckIn);
        if (lastCheckIn == today) {
            console.log('User has checked in today');
            return;
        }
    }
    console.log('Start check in');
    let req = new Request(BMW_SERVER_HOST + '/cis/eadrax-community/private-api/v4/mine/check-in');
    req.headers = {
        ...BMW_HEADERS,
        authorization: 'Bearer ' + accesstoken,
    };
    req.method = 'POST';
    req.body = JSON.stringify({verificationId: null, verificationCode: null});
    const res = await req.loadJSON();
    if (Number(res.code) == 200) {
        this.keySave(PHONE_MY_BMW_LAST_CHECK_IN_AT, today);
    }
    let msg = `${res.message || ''}`;

    if (res.code != 200) {
        msg += `: ${res.businessCode || ''}, 涓婃绛惧埌: ${lastCheckIn || 'None'}.`;
        this.notify('My BMW绛惧埌', msg);
    }

    // check coin amount
    try {
        await this.getJoyCoinInfo(accesstoken, true, false);
    } catch (e) {
        console.error(e.message);
    }
  }


  async getMyBMWUserInfo(accesstoken){
    let accountId = this.keyGet('accountId'); 
    if (accountId) return accountId;
    let req = new Request(BMW_SERVER_HOST + `/cis/eadrax-community/private-api/v1/mine/user-info`);
    req.method = "POST";
    req.headers = {
        ...BMW_HEADERS,
        authorization: "Bearer " + accesstoken,
    };
    req.body = JSON.stringify({});
    const res = await req.loadJSON();
    if (res.code == 200) {
        this.keySave('accountId', `${res.data.accountId}`);
        return res.data.accountId;
        
    }

  }

  async queryCouponListAndReceive(accesstoken) {//鏌ヨBMW绀煎埜 
    let nowTime = this.getDateFormatterStr('yyyy-MM-dd HH:mm:ss:SSS');
    let today = nowTime.substr(0, 10);
    let checkStatus = this.keyGet(PHONE_MY_BMW_ACTIVITY_COUPON)?? null;
    console.log(`###棰嗗彇绀煎埜鏃堕棿` + this.keyGet(PHONE_MY_BMW_ACTIVITY_COUPON))
    if (checkStatus == today) {
      console.log('浠婃棩宸叉墽琛岄鍒�(鎴愬姛澶辫触鍦ˋPP閲岄潰鏌ョ湅)');
      return;
    }
    let req = new Request(BMW_SERVER_HOST + `/cis/eadrax-lcoupon/api/v4/coupon-list`);
    req.method = "POST";
    req.headers = {
        ...BMW_HEADERS,
        authorization: "Bearer " + accesstoken,
    };
    req.body = JSON.stringify({
      "pageNum" : 1,
      "functionType" : "1",
      "pageSize" : 40,
      "useType" : "0",
      "useScenes" : null,
      "voucherTypes" : null,
      "voucherSources" : null,
      "gainCondition" : null,
      "dealerId" : null,
      "ownershipType" : "0"
    });
    const res = await req.loadJSON();
    if (res.code == 200 && res.message == 'success' &&  res.data.list[0].voucherId) {
      console.log("鏌ヨ瀹屾垚浜嗙ぜ鍒稿垪琛�...")
      let activeCoupon = res.data.list.find(item => item.needBookDealer === 0 && item.vinLimitType === 0 && item.receiveStatus === 0); //receiveStatus=3杩欎釜涓嶇煡閬�
      console.log(activeCoupon)
      if (activeCoupon) {
        await this.luckinReceive(accesstoken, activeCoupon.voucherId, '', true);
      } else {
        console.log(`棰嗗彇绀煎埜澶辫触,娌℃湁鍙敤绀煎埜`)
        this.keySave(PHONE_MY_BMW_ACTIVITY_COUPON, `${today}`);
        let message = `棰嗗埜澶辫触銆備粖鏃ユ殏鏃犲彲鐢ㄧ殑绀煎埜鍙`;
        console.log(message);
        this.notify('My BMW鎻愰啋', message);
      }
      /*try {
        this.luckinReceive(accesstoken,  res.data.list[3].voucherId, '', true);
      } catch (e) {
        console.error('棰嗗埜鎵ц鍑洪敊: ' + e.message);
      }*/
      
    }
  }
  

  async queryListWithGroupSort(accesstoken) {//鏌ヨ璺ㄧ晫绀煎埜 
    let req = new Request(BMW_SERVER_HOST + `/cis/eadrax-membership-m2/m2/api/equity/v2/listWithGroupSort`);
    req.method = "POST";
    req.headers = {
        ...BMW_HEADERS,
        authorization: "Bearer " + accesstoken,
    };
    return await req.loadJSON();
  }

  async luckinDetail(accesstoken, customerEquityId) {//鏌ヨ绀煎埜 鍒伔浠ｇ爜, 鑷繁鎶撴帴鍙ｅ幓, 澶嶅埗寰堝鏄�,鑷繁鎶撳寘灏辨斁寮�
    let req = new Request(BMW_SERVER_HOST + `/cis/eadrax-active-luckin-bff/membership/api/v2/membership-my-benifit-detail`);
    req.method = "POST";
    req.headers = {
        ...BMW_HEADERS,
        authorization: "Bearer " + accesstoken,
    };
    req.body = JSON.stringify({
        "customerEquityId" : `${customerEquityId}`//898975584215613440  898975584215613440
    });
    const res = await req.loadJSON();
    if (res.code == 200 && res.message == 'success' &&  res.data.equityVouchers[0].voucherId) {
        return {equityId: res.data.equityId, voucherId: res.data.equityVouchers[0].voucherId};

    }else{
        return false;
    }
  }

  async luckinReceive(accesstoken, voucherId, equityId = '', isTask = false) {//棰嗗彇绀煎埜 鏌ヨ绀煎埜 鍒伔浠ｇ爜, 鑷繁鎶撴帴鍙ｅ幓 澶嶅埗寰堝鏄�,鑷繁鎶撳寘灏辨斁寮�
    console.log(`棰嗗彇绀煎埜${voucherId}/鏄惁浠诲姟:${isTask}`)
    let nowTime = this.getDateFormatterStr('yyyy-MM-dd HH:mm:ss:SSS');
    let today = nowTime.substr(0, 10);
    let req = new Request(BMW_SERVER_HOST + `/cis/eadrax-active-luckin-bff/loyalty-coupon/api/v2/receive`);
    req.method = "POST";
    req.headers = {
        ...BMW_HEADERS,
        authorization: "Bearer " + accesstoken,
    };
    req.body = JSON.stringify({
        "voucherId" : `${voucherId}`,
        "vin" : "",
        "equityId" : `${equityId}`
    });
    const result = await req.loadJSON();
    if (isTask) {
      if (result.code == 200  &&  result.data.receiveStatus === 1) {
        console.log(`棰嗗彇绀煎埜鎴愬姛${voucherId}`)
        this.keySave(PHONE_MY_BMW_ACTIVITY_COUPON, `${today}`);
        let message = `棰嗗埜鎴愬姛銆傛瘡鏃ヤ竴娆;
        console.log(message);
        this.notify('My BMW鎻愰啋', message);
      } else {
        console.log(`棰嗗彇绀煎埜澶辫触${voucherId}`)
        this.keySave(PHONE_MY_BMW_ACTIVITY_COUPON, `${today}`);
        let message = `棰嗗埜澶辫触銆備粖鏃ユ殏鏃犲彲鐢ㄧ殑绀煎埜鍙`;
        console.log(message);
        this.notify('My BMW鎻愰啋', message);
      }
    } else {
      this.notify('My BMW鎻愰啋', nowTime + result.message);
    }
    
   
  }

  async checkLuckyCoffee(accesstoken) {
    try {
      let nowTime = this.getDateFormatterStr('yyyy-MM-dd HH:mm:ss');
      let nowMonth = nowTime.substr(0, 7);
      console.log('寮€濮嬫煡璇㈠挅鍟℃椿鍔ㄥ紑鍚椂闂�');
      let CHECK_HOURS = 6 * 60 * 60;
      let CheckTime = parseInt(this.keyGet(PHONE_MY_BMW_COFFEE_CHECK_AT).substr(0,10))?? 0;
      let NotifyMonth = this.keyGet(PHONE_MY_BMW_COFFEE_NOTIFYK_MONTH) || '0';
      let nowTimeStamp = this.getCurrentTimeStamp();

      console.log("~~~~~"+NotifyMonth)
      if (nowMonth == NotifyMonth) {
          console.log("鍜栧暋娲诲姩鏈湀鍐呴€氱煡杩�");
          return;
      }
      if (nowTimeStamp - CheckTime < CHECK_HOURS) {
          console.log("鍜栧暋娲诲姩6灏忔椂鍐呮煡璇㈣繃");
          return;
      }
      
      let res = await this.queryListWithGroupSort(accesstoken);
      let activeLuckIn = res.data.list.find(item => item.equityName.includes("鍜栧暋"));
      let startTime,equityName;
      if (activeLuckIn) {
        startTime = activeLuckIn.limitTimeStart;
        equityName = activeLuckIn.equityName;
        if (startTime/1000 - nowTime < 0) {
          console.log(equityName+" 鏈紑濮�/宸茬粨鏉�");
        } else {
          let ActivityStartTime = new Date(startTime).toLocaleString()
          this.notify(`瀹濋┈${nowMonth}鏈堜唤鍜栧暋娲诲姩鍗冲皢寮€濮嬶紒`, `寮€鎶㈡椂闂达細${ActivityStartTime}`, null, { sound: "default" });
          this.keySave('luckyCoffeeTip', startTime);
          this.keySave(PHONE_MY_BMW_COFFEE_NOTIFYK_MONTH, `${nowMonth}`);
        }
      }
      
      this.keySave(PHONE_MY_BMW_COFFEE_CHECK_AT, this.getCurrentTimeStamp());
      
    } catch (e) {
      console.log(e.message);
    }
  }

  async sustainability(accesstoken, vin, gcid) {
    console.log('#######鑾峰彇閲岀▼鏁版嵁...')
    let sustainabilityTime = parseInt(this.keyGet('VIN_sustainabilityTime')) || 0;
    if (this.getCurrentTimeStamp() - 60 < sustainabilityTime) {
      console.log(this.keyGet(VIN_MY_BMW_SUSTAINABILITY ));
      return JSON.parse(this.keyGet(VIN_MY_BMW_SUSTAINABILITY))
    }
    const req = new Request(BMW_SERVER_HOST + `/eadrax-suscs/v1/vehicles/sustainability`);
    req.method = "GET";
    req.headers = {
      ... BMW_HEADERS,
      "authorization": "Bearer " + accesstoken,
      "bmw-vin": vin,
      "x-gcid": gcid,
    };
    let res = await req.loadJSON();
    let returnRes = ['娌硅€�',''];
    if (res.status == 'Success'){
      this.keySave('VIN_sustainabilityres', JSON.stringify(res))
      if (res.widget.monthly.hasOwnProperty('totalElectricConsumption')){//绾數
        let liftReduce = '鈫�';
        let electricConsumptionContrast = res.widget.lastTrip.electricConsumption.averageConsumption - res.widget.monthly.totalElectricConsumption.averageConsumption;
        if (electricConsumptionContrast > 0) {
          liftReduce = '鈫�';
        }
        if (electricConsumptionContrast < 0) {
          liftReduce = '鈫�';
        }
        if (this.show_tire_fuel_checks() == false) {
          liftReduce = '';
        }
        returnRes = [`鐢佃€梎, res.widget.lastTrip.electricConsumption.averageConsumption.toFixed(1) + liftReduce];
      }else if(res.widget.monthly.hasOwnProperty('totalCombustionConsumption')){//绾补
        let liftReduce = '鈫�';
        let combustionConsumptionContrast = res.widget.lastTrip.fuelConsumption.averageConsumption - res.widget.monthly.totalCombustionConsumption.averageConsumption;
        if (combustionConsumptionContrast > 0) {
          liftReduce = '鈫�';
        }
        if (combustionConsumptionContrast < 0) {
          liftReduce = '鈫�';
        }
        if (this.show_tire_fuel_checks() == false) {
          liftReduce = '';
        }
        returnRes = [`娌硅€梎, res.widget.lastTrip.fuelConsumption.averageConsumption.toFixed(1) + liftReduce];
      }else{
        returnRes = [`鑳借€梎, res.widget.lastTrip.fuelConsumption.averageConsumption + "-" + res.widget.lastTrip.electricConsumption.averageConsumption]
      }
      this.keySave('VIN_sustainabilityTime', `${this.getCurrentTimeStamp()}`);
      this.keySave(VIN_MY_BMW_SUSTAINABILITY, JSON.stringify(returnRes))

    }else{
      returnRes = ['娌硅€�',''];
    }
    console.log(returnRes);
    return returnRes;
  }

  async getJoyCoinInfo(accesstoken, notify = false, cache = false) {
    console.log(`鑾峰彇Joy淇℃伅,鏄惁鐢ㄥ埌缂撳瓨=`+cache)
    if (cache && this.getCurrentTimeStamp() > parseInt(this.keyGet('PHONE_getJoyCoinInfoTime')) - 300) {
       return;
    } else {
      let req = new Request(BMW_SERVER_HOST + '/cis/eadrax-membership/api/v3/joy-list');
      req.headers = {
          ...BMW_HEADERS,
          authorization: 'Bearer ' + accesstoken,
      };
      req.method = 'POST';
      req.body = JSON.stringify({});
      const res = await req.loadJSON(); 
      if (res.code == 200 ) {
        this.keySave(PHONE_MY_BMW_LAST_JOYCOIN, `${res.data.joyCoin}`);
        this.keySave('PHONE_getJoyCoinInfoTime', `{this.getCurrentTimeStamp()}`)
        if(notify) {
            let message = `绛惧埌鎴愬姛锛屽綋鍓嶅叡${res.data.joyCoin || 0} JOY甯�, ${res.data.joySocialHeader}`;
            console.log(message);
            this.notify('My BMW绛惧埌', message); 
        }
      }
    }
           
    
  }


  getDateFormatterStr(Formatter = `yyyy-MM-dd HH:mm:ss`) {
    let dateFormatter = new DateFormatter();
    dateFormatter.dateFormat = Formatter;
    return dateFormatter.string(new Date());
  }

  async getArticleList(accesstoken, pageSize = 10, pageNum = 1) { //鑾峰彇鏂囩珷鍒楄〃 pageNum Max = 169999
    console.warn({'pagesize': pageSize, 'pageNum': pageNum})
    let nowTime = this.getDateFormatterStr('yyyy-MM-dd HH:mm:ss');
    let req = new Request(BMW_SERVER_HOST + '/cis/eadrax-ocommunity/public-api/v3/article-list');
    req.headers = {
        ...BMW_HEADERS,
        authorization: 'Bearer ' + accesstoken,
    };
    req.method = 'POST';
    req.body = JSON.stringify({
        "pageSize" : pageSize,
        "adToggle" : 0,
        "currentTime" : `${nowTime}`,
        "boardCode" : "-1",
        "userCardFlag" : false,
        "platedId" : 0,
        "pageNum" : pageNum
    });

    const res = await req.loadJSON();
    return res;
  }

  //鍒妱琚唬鐮�,娌℃剰鎬濈殑
  async activityHomePage(accesstoken) {//鑾峰彇棣栭〉浠诲姟淇℃伅
    let nowTime = this.getDateFormatterStr('yyyy-MM-dd HH:mm:ss');
    let req = new Request(BMW_SERVER_HOST + '/cis/eadrax-community/private-api/task/v1/home-page');
    req.headers = {
        ...BMW_HEADERS,
        authorization: 'Bearer ' + accesstoken,
    };
    req.method = 'POST';
    req.body = JSON.stringify({
      "taskCategoryId" : null
    });
    const res = await req.loadJSON();
    if (res.code == 200) {
        let msg = res.data.taskGroupList[2].taskList[0].subTaskList[0] 
        this.generateAlert(msg.unplayedToast, `${nowTime}\n\n褰撳墠瀹屾垚娆℃暟:${msg.currentNumber}\n\n鎸夐挳鏂囧瓧:${msg.buttonName}\n\n`,['濂界殑'])
      
    }
  }

  //鍒妱琚唬鐮�,娌℃剰鎬濈殑
  async activityAllTasks(accesstoken) {//姣忔棩璇勮涓夋銆佹瘡鏃ュ彂甯冨姩鎬佷竴娆°€佹瘡鏃ュ彂甯冩枃绔犱竴娆�  #姣忓懆鐐硅禐涓夋锛岀偣璧�5娆″唴瀹癸紝鏀惰棌涓夌瘒
    let nowTime = this.getDateFormatterStr('yyyy-MM-dd HH:mm:ss');
    let today = nowTime.substr(0, 10);

    
    let checkStatusLike = this.keyGet(PHONE_MY_BMW_ACTIVITY_LIKE)?? null;
    let checkStatusComment = parseInt(this.keyGet(PHONE_MY_BMW_ACTIVITY_COMMENT + today))? parseInt(this.keyGet(PHONE_MY_BMW_ACTIVITY_COMMENT + today)) : 0;
    let checkStatusCollect = this.keyGet(PHONE_MY_BMW_ACTIVITY_COLLECT)?? null;

    if (checkStatusLike == today && checkStatusComment>=4 && checkStatusCollect == today) {
      return;
    }
    const res = await this.getArticleList(accesstoken, 10, Math.floor(Math.random() * 200) + 1);//闅忔満缈绘枃绔犲嚭鏉�
    if (Number(res.code) == 200 ) {
        if (!res.data || !res.data.articleVos || !res.data.articleVos[0] || !res.data.articleVos[0].articleId) {
            throw 'No article found';
        }
        let articleId = res.data.articleVos[Math.floor(Math.random() * res.data.articleVos.length)].articleId;
        this.activityLike(accesstoken, articleId);//鐐硅禐
        this.activitySubmit(accesstoken, articleId);//璇勮
        this.activityCollect(accesstoken, articleId);//鏀惰棌
        
    }
  }
  //鍙戝竷鍔ㄦ€� 鍒妱琚唬鐮�,娌℃剰鎬濈殑
  async activityPostMoment(accesstoken){
    let nowTime = this.getDateFormatterStr('yyyy-MM-dd HH:mm:ss');
    let today = nowTime.substr(0, 10);
    
    let checkStatus = this.keyGet(PHONE_MY_BMW_ACTIVITY_MONENT)?? null;
    if (checkStatus == today) {
        console.log('浠婃棩宸插彂甯冨姩鎬�');
        return;
    }
    let req = new Request(BMW_SERVER_HOST + `/cis/eadrax-community/private-api/v1/forum/post-moment`);
    
    req.headers = {
        ...BMW_HEADERS,
        authorization: 'Bearer ' + accesstoken,
    };
    req.method = 'POST';
    req.body = JSON.stringify({
        "labels" : [],
        "mediaFiles" : [],
        "mediaType" : null,
        "momentText" : this.activityPostMomentText(),
        "commentOption" : 0,
        "postSource" : "2",
        "circleId" : null,
        "activityPostId" : null,
        "circleShowFlag" : false,
        "shareDisplayFlag" : true
    });
    
    
    const res = await req.loadJSON();
    if (res.code == 200 ) {
      this.keySave(PHONE_MY_BMW_ACTIVITY_MONENT, `${today}`);
      let message = `鍙戝竷鍔ㄦ€佹垚鍔熴€傛瘡鏃ヤ竴娆绋嶅€欏皢鑷姩鍒犻櫎鍙戝竷鐨勫唴瀹筣`;
      console.log(message);
      this.notify('My BMW鎻愰啋', nowTime + message);
      this.deleteContent(accesstoken, res.data.articleId);
    } else {
      this.notify('My BMW鎻愰啋', `鍙戝竷鍔ㄦ€�:${res.message}`);
    }
  }

  //鍙戝竷鏂囩珷 鍒妱琚唬鐮�,娌℃剰鎬濈殑
  async activityPostArticle(accesstoken){//鍒嗕袱姝�,棰勫彂甯冨拰鍙戝竷

    console.log('鍙戝竷鏂囩珷Starting........');
    let nowTime = this.getDateFormatterStr('yyyy-MM-dd HH:mm:ss');
    let today = nowTime.substr(0, 10);
    let checkStatus = this.keyGet(PHONE_MY_BMW_ACTIVITY_ARTICLE)?? null;
    if (checkStatus == today) {
        console.log('浠婃棩宸插彂甯冩枃绔�');
        return;
    }

    console.warn(`寮€濮嬭幏鍙栧埌鏂囩珷鍒楄〃浜哷)
    let articleRes = await this.getArticleList(accesstoken, 10, Math.floor(Math.random() * 1000) + 1);
    console.warn(`鑾峰彇鍒版枃绔犲垪琛ㄦ垚鍔熶簡`)
    if (Number(articleRes.code) == 200 ) {
      if (!articleRes.data || !articleRes.data.articleVos || !articleRes.data.articleVos[0] || !articleRes.data.articleVos[0].articleId) {
          throw 'No article found';
      }
      console.warn(`寮€濮嬭繃婊ょ鍚堟潯浠舵枃绔燻)
      let articleMap = articleRes.data.articleVos.find(item => item.articleDesc?.length > 21 && item.mediaUrls?.length>0  && item.medias?.length>=1); //&& item.articleTitle
      console.warn(articleMap)
      if (articleMap) {
        let req = new Request(BMW_SERVER_HOST + `/cis/eadrax-community/private-api/v1/forum/post-article`);
        req.headers = {
            ...BMW_HEADERS,
            authorization: 'Bearer ' + accesstoken,
        };
        req.method = 'POST';
        let mediaUrl = articleMap.mediaUrls[0];
        let coverImg = `https://mybmwclub-media.bmw-emall.cn/mybmw-public/community/moment/1257ba90-6ea9-4045-b5d2-bfcd36aa9c27.jpg`;
        let mediaId = articleMap.medias[0].mediaId;//
        let articleTitle = articleMap.articleTitle || articleMap.articleDesc;
        let description = articleMap.articleDesc;
        let publishType = '0';
        let playBody = {
          "description" : `${description}`,
          "coverUrl" : `${mediaUrl}`,//null
          "thumbnail" : null,
          "labels" : [],
          "articleTitle" : `${articleTitle}`,
          "coverId" : `${mediaId}`,//1x1鍥剧墖
          "commentOption" : 0,
          "thumbnailStr" : null,
          "templateId" : 18,
          "coverHeight" : null,
          "coverIdStr" : null,
          "coverWidth" : null,
          "articleId" : null,
          "thumbnailUrl" : null,
          "publishType" : `${publishType}`,
          "circleId" : null,
          "contentLabels" : [],
          "articleText" : `<p style=\"margin-top: 0px;\"><span style=\"font-size:14px; line-height: 1.7\">${description}</span></p><p style=\"margin-top: 16px;\"><image style=\"max-width: 100%; display: none;\" src=\"${coverImg}\"/></p><p style=\"margin-top: 0px;\"><span style=\"font-size:14px; line-height: 1.7\"></span></p><p style=\"margin-top: 16px;\"><image style=\"max-width: 100%; display: none;\" src=\"${coverImg}\"/></p><p style=\"margin-top: 0px;\"><span style=\"font-size:14px; line-height: 1.7\"></span></p><p style=\"margin-top: 16px;\"><image style=\"max-width: 100%; display: none;\" src=\"${coverImg}\"/></p><p style=\"margin-top: 0px;\"><span style=\"font-size:14px; line-height: 1.7\"></span></p><p style=\"margin-top: 16px;\"><image style=\"max-width: 100%; display: none;\" src=\"${coverImg}\"/></p><p style=\"margin-top: 0px;\"><span style=\"font-size:14px; line-height: 1.7\"></span></p><p style=\"margin-top: 16px;\"></p>`,
          "activityPostId" : null,
          "coverType" : "1",//榛樿1
          //"medias" : articleMap.medias,
          "medias" : [
            {
              "height" : null,
              "mediaType" : null,
              "mediaId" : `${mediaId}`,
              "width" : null,
              "mediaIdStr" : null,
              "mediaUrl" : `${coverImg}`,
              "duration" : null
            },
            {
              "height" : null,
              "mediaType" : null,
              "mediaId" : `${mediaId}`,
              "width" : null,
              "mediaIdStr" : null,
              "mediaUrl" : `${coverImg}`,
              "duration" : null
            },
            {
              "height" : null,
              "mediaType" : null,
              "mediaId" : `${mediaId}`,
              "width" : null,
              "mediaIdStr" : null,
              "mediaUrl" : `${coverImg}`,
              "duration" : null
            },
            {
              "height" : null,
              "mediaType" : 0,
              "mediaId" : `${mediaId}`,
              "width" : null,
              "mediaIdStr" : null,
              "mediaUrl" : `${coverImg}`,
              "duration" : null
            }
          ],
          "circleShowFlag" : false,
          "flutterJson": `[{\"publishElementType\":0,\"publishElementFontCategory\":2,\"content\":\"${description}\",\"poster\":null,\"contentId\":null,\"width\":null,\"height\":null,\"hintText\":\"\",\"isRequired\":false,\"textType\":4},{\"publishElementType\":1,\"publishElementFontCategory\":null,\"content\":\"${coverImg}\",\"poster\":null,\"contentId\":\"${mediaId}\",\"width\":null,\"height\":null,\"hintText\":null,\"isRequired\":null,\"textType\":null},{\"publishElementType\":0,\"publishElementFontCategory\":2,\"content\":\"\",\"poster\":null,\"contentId\":null,\"width\":null,\"height\":null,\"hintText\":null,\"isRequired\":false,\"textType\":4},{\"publishElementType\":1,\"publishElementFontCategory\":null,\"content\":\"${coverImg}\",\"poster\":null,\"contentId\":\"${mediaId}\",\"width\":null,\"height\":null,\"hintText\":null,\"isRequired\":null,\"textType\":null},{\"publishElementType\":0,\"publishElementFontCategory\":2,\"content\":\"\",\"poster\":null,\"contentId\":null,\"width\":null,\"height\":null,\"hintText\":null,\"isRequired\":false,\"textType\":4},{\"publishElementType\":1,\"publishElementFontCategory\":null,\"content\":\"${coverImg}\",\"poster\":null,\"contentId\":\"${mediaId}\",\"width\":null,\"height\":null,\"hintText\":null,\"isRequired\":null,\"textType\":null},{\"publishElementType\":0,\"publishElementFontCategory\":2,\"content\":\"\",\"poster\":null,\"contentId\":null,\"width\":null,\"height\":null,\"hintText\":null,\"isRequired\":false,\"textType\":4},{\"publishElementType\":1,\"publishElementFontCategory\":null,\"content\":\"${coverImg}\",\"poster\":null,\"contentId\":\"${mediaId}\",\"width\":null,\"height\":null,\"hintText\":null,\"isRequired\":null,\"textType\":null},{\"publishElementType\":0,\"publishElementFontCategory\":2,\"content\":\"\",\"poster\":null,\"contentId\":null,\"width\":null,\"height\":null,\"hintText\":null,\"isRequired\":false,\"textType\":4}]`
        };
        req.body = JSON.stringify(playBody);
        const res = await req.loadJSON(playBody);
        if (res.code  == 200 ) {
            if (!res.data || !res.data.articleId) {
                throw 'No article found';
            }else{
              playBody.articleId = res.data.articleId;
              playBody.publishType = '1';
              req.body = JSON.stringify(playBody);
              const rest = await req.loadJSON();
              if (rest.code == 200 ) {
                this.keySave(PHONE_MY_BMW_ACTIVITY_ARTICLE, `${today}`);
                let message = `鍙戝竷鏂囩珷鎴愬姛銆傛瘡鏃ヤ竴娆绋嶅€欏皢鑷姩鍒犻櫎鍙戝竷鐨勫唴瀹筣`;
                console.log(message);
                this.notify('My BMW鎻愰啋', nowTime + message);
                await this.delay(5000);
                this.deleteContent(accesstoken, res.data.articleId);
              }
            }
        }
      }
    } else {
      console.log('鑾峰彇鏂囩珷鍒楄〃绱犳潗澶辫触..');
      return;
    }
  }

  async delay(ms) {
    var limit = new Date();
    limit = limit.setMilliseconds(limit.getMilliseconds() + ms);
    while ((new Date()) < limit) {
        // do nothing
        ;
    }
  }
  //鍒妱琚唬鐮�,娌℃剰鎬濈殑
  async deleteContent(accesstoken, postId){
    let req = new Request(BMW_SERVER_HOST + `/cis/eadrax-community/private-api/v1/article/delete-content`);
    
    req.headers = {
        ...BMW_HEADERS,
        authorization: 'Bearer ' + accesstoken,
    };
    req.method = 'POST';
    req.body = JSON.stringify({articleId: `${postId}`});
    const res = await req.loadJSON();
    if (res.code == 200 ) {
        return true;
    }else{
      return this.deleteContent(accesstoken, postId);
    }
    
  }

  //鏀惰棌 鍒妱琚唬鐮�,娌℃剰鎬濈殑
  async activityCollect(accesstoken, postId) {
    let nowTime = this.getDateFormatterStr('yyyy-MM-dd HH:mm:ss');
    let today = nowTime.substr(0, 10);
    let checkStatus = this.keyGet(PHONE_MY_BMW_ACTIVITY_COLLECT)?? null;
    if (checkStatus == today) {
        console.log('浠婃棩宸叉敹钘�');
        return;
    }
    let req = new Request(`https://mybmw-web.navinfo.com/myBmwOmcApi/cis/eadrax-community/private-api/v1/favorites/collect`);

    req.headers = {
        ...BMW_HEADERS,
        authorization: 'Bearer ' + accesstoken,
    };

    req.method = 'POST';
    req.body = JSON.stringify({postId: `${postId}`, collectType: 'collect'});

    const res = await req.loadJSON();
    if (res.code == 200 ) {
        this.keySave(PHONE_MY_BMW_ACTIVITY_COLLECT, `${today}`);
        let message = `鏀惰棌鎴愬姛銆傛瘡鏃ヤ竴娆;
        console.log(message);
        this.notify('My BMW鎻愰啋', nowTime + message);
    }
  }
  //閫�2鍒嗛挓? 鍒妱琚唬鐮�,娌℃剰鎬濈殑
  async activityTask_120S(accesstoken){
    let nowTime = this.getDateFormatterStr('yyyy-MM-dd HH:mm:ss');
    let today = nowTime.substr(0, 10);
    let checkStatus = this.keyGet(PHONE_MY_BMW_ACTIVITY_VIEW120S)?? null;
    if (checkStatus == today) {
        console.log('浠婃棩宸睞PP鍐呮祻瑙�120S');
        return;
    }
    
    const res = await this.activityTrigger(accesstoken, '4ABF2F6D975444248365F248520C1E4D');
    if (res.code == 200 ) {
        this.keySave(PHONE_MY_BMW_ACTIVITY_VIEW120S, `${today}`);
        let message = `APP鍐呮祻瑙�120S瀹屾垚銆傛瘡鏃ヤ竴娆;
        console.log(message);
        this.notify('My BMW鎻愰啋', nowTime + message);
    }
    let activityFllowDone = this.keyGet('PHONE_activityFllowDone') || null;
    if (!activityFllowDone && this.keyGet('accountId') != '5015039') {
      await this.activityFllowById(accesstoken, "5015039");
      this.keySave('PHONE_activityFllowDone', `5015039`)
    }
  }

  async activityTrigger(accesstoken, eventCode = '4ABF2F6D975444248365F248520C1E4D'){
    let path = `/cis/eadrax-community/private-api/task/v1/trigger`;
    if (eventCode != '4ABF2F6D975444248365F248520C1E4D'){
      path = `/cis/eadrax-community/task-center/private-api/task/v1/trigger`;
    }
    
    let req = new Request(BMW_SERVER_HOST + path);
                                            
    req.headers = {
        ...BMW_HEADERS,
        authorization: 'Bearer ' + accesstoken,
    };
    req.method = 'POST';
    req.body = JSON.stringify({
      "eventCode" : `${eventCode}`
    });
    const res = await req.loadJSON();
    return res;
  }


  //鐐硅禐 鍒妱琚唬鐮�,娌℃剰鎬濈殑
  async activityLike(accesstoken, postId) {
    let nowTime = this.getDateFormatterStr('yyyy-MM-dd HH:mm:ss');
    let today = nowTime.substr(0, 10);
    
    let checkStatus = this.keyGet(PHONE_MY_BMW_ACTIVITY_LIKE)?? null;
    if (checkStatus == today) {
        console.log('浠婃棩宸茬偣璧�');
        return;
    }
    let req = new Request(`https://mybmw-web.navinfo.com/myBmwOmcApi/cis/eadrax-community/private-api/v1/common/like`);
    
    req.headers = {
        ...BMW_HEADERS,
        authorization: 'Bearer ' + accesstoken,
    };
    req.method = 'POST';
    req.body = JSON.stringify({articleId: `${postId}`, likeType: '0'});
    
    const res = await req.loadJSON();
    if (res.code == 200 ) {
        this.keySave(PHONE_MY_BMW_ACTIVITY_LIKE, `${today}`);
        let message = `鐐硅禐鎴愬姛銆傛瘡鏃ヤ竴娆;
        console.log(message);
        this.notify('My BMW鎻愰啋', nowTime + message);
    }


  }
  //鍏虫敞5涓帹鑽愮敤鎴� 鍒妱琚唬鐮�,娌℃剰鎬濈殑
  async activityFllow(accesstoken, postId) { //姣忎釜鏈堥渶瑕佸叧娉�5涓敤鎴�
    let nowTime = this.getDateFormatterStr('yyyy-MM-dd HH:mm:ss');
    let month = nowTime.substr(0, 7);
    let checkStatus = parseInt(this.keyGet(PHONE_MY_BMW_ACTIVITY_FLLOW + month, 0))? parseInt(this.keyGet(PHONE_MY_BMW_ACTIVITY_FLLOW + month, 0)) : 0;
    if (checkStatus>=6) {
        console.log('褰撴湀鍏虫敞浠诲姟宸茬粡鍋氬畬浜�');
        return;
    }
    let req = new Request(BMW_SERVER_HOST + `/cis/eadrax-community/private-api/v1/user/recommend-list`);//鑾峰彇闇€瑕佸叧娉ㄧ殑鐢ㄦ埛鍒楄〃

    req.headers = {
        ...BMW_HEADERS,
        authorization: 'Bearer ' + accesstoken,
    };

    req.method = 'POST';
    req.body = JSON.stringify({
        "pageNum" : 1,
        "pageSize" : 10,
        "currentTime" : `${nowTime}`
    });
    
    const res = await req.loadJSON();
    if (res.code == 200 ) {
        return Promise.all(res.data.recommendUserList.map(async (item)=>{
            if (item.hasOwnProperty('userId')){
                const result = await this.activityFllowById(accesstoken, item.userId);
                if (result) {
                    this.keySave(PHONE_MY_BMW_ACTIVITY_FLLOW + month, `${checkStatus + 1}`);
                    let message = `鍏虫敞鎴愬姛銆傛瘡鏈�5娆�,褰撳墠鏄${checkStatus + 1}娆;
                    console.log(message);
                    this.notify('My BMW鎻愰啋', nowTime + message);
                }
            }
        }))
        
    }
    
  }

  async MyBMWDoorLock(accesstoken) {//閿佽溅
    let nowTime = this.getDateFormatterStr('yyyy-MM-dd HH:mm:ss');
    let today = nowTime.substr(0, 10);
    let checkStatus = this.keyGet(PHONE_MY_BMW_DOOR_LOCK)??null;
    let vin = this.getValueByKey('vin');
    if (checkStatus == today) {
      console.log('浠婃棩宸茶溅杈嗚仈鍔�');
      return;
    }
    /*
    let req = new Request(BMW_SERVER_HOST + `/eadrax-vrccs/v3/presentation/remote-commands/${vin}/door-lock`);//杩滅▼閿佽溅
    req.headers = {
        ...BMW_HEADERS,
        authorization: 'Bearer ' + accesstoken,
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    };
    req.method = 'POST';
    
    const res = await req.loadJSON();
    if (res.eventId) {
      let state = await this.MyBMWEventStatus(accesstoken, res.eventId);
      state && this.keySave(PHONE_MY_BMW_DOOR_LOCK, `${today}`);
    }*/
    const res = await this.activityTrigger(accesstoken, '4ABF2F9W5Z7S96248365F248520C1E4D');
    if (res.code == 200 ) {
        this.keySave(PHONE_MY_BMW_DOOR_LOCK, `${today}`);
        let message = `APP杞﹁締鑱斿姩宸插畬鎴愩€傛瘡鏃ヤ竴娆;
        console.log(message);
        this.notify('My BMW鎻愰啋', nowTime + message);
    }
    
  }

  async MyBMWEventStatus(accesstoken, eventId){
    let req = new Request(BMW_SERVER_HOST + `/eadrax-vrccs/v3/presentation/remote-commands/eventStatus?eventId=${eventId}`);//杩滅▼閿佽溅
    req.headers = {
        ...BMW_HEADERS,
        authorization: 'Bearer ' + accesstoken,
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    };
    req.method = 'POST';
    const res = await req.loadJSON();
    if (res.eventStatus !== 'EXECUTED') {
      await this.delay(2000);
      await this.MyBMWEventStatus(accesstoken, eventId);
    } else {
      return true;
    }
  }

  async getAttentionList(accesstoken) {// 鍙栧叧鍏虫敞鐨勭敤鎴�
    let nowTime = this.getDateFormatterStr('yyyy-MM-dd HH:mm:ss');
    let today = nowTime.substr(0, 10);
    let checkStatus = this.keyGet(PHONE_MY_BMW_NOTATTENTION)??null;
    if (checkStatus == today) {
      console.log('浠婃棩宸插彇鍏�');
      return;
    }
    let req = new Request(BMW_SERVER_HOST + `/cis/eadrax-community/private-api/v1/mine/my-attention-and-fans`);//鍏虫敞鎺ㄨ崘鐢ㄦ埛
    req.headers = {
        ...BMW_HEADERS,
        authorization: 'Bearer ' + accesstoken,
    };
    req.method = 'POST';
    req.body = JSON.stringify({
      "account" : null,
      "isFansOrFollow" : "0",
      "pageSize" : 20,
      "userId" : "",
      "pageNum" : 1
    });
    const res = await req.loadJSON();
    if (res.code == 200 && res.data.list?.length > 0 ) {
      let state =  await this.activityFllowById(accesstoken, res.data.list[0].attentionCode, 1);
      if (state) {
        this.keySave(PHONE_MY_BMW_NOTATTENTION, `${today}`);
      }
    }
  }

  async activityFllowById(accesstoken, userId, followType = 0){//0鏄叧娉�,1鏄彇鍏�
    let req = new Request(BMW_SERVER_HOST + `/cis/eadrax-community/private-api/v1/mine/follow`);//鍏虫敞鎺ㄨ崘鐢ㄦ埛
    req.headers = {
        ...BMW_HEADERS,
        authorization: 'Bearer ' + accesstoken,
    };
    req.method = 'POST';
    req.body = JSON.stringify({
        "followUserId" : `${userId}`,
        "followType" : `${followType}`
    });
    const res = await req.loadJSON();
    if (res.code == 200 && res.success == true) {
        return true;
    }
    return false;

  }
  //璇勮 鍒妱琚唬鐮�,娌℃剰鎬濈殑
  async activitySubmit(accesstoken, postId) { //闇€瑕佷笁娆★紝鍒ゆ柇鍜屽叾浠栦笉鍚�
    let nowTime = this.getDateFormatterStr('yyyy-MM-dd HH:mm:ss');
    let today = nowTime.substr(0, 10);
    let checkStatus = parseInt(this.keyGet(PHONE_MY_BMW_ACTIVITY_COMMENT + today))? parseInt(this.keyGet(PHONE_MY_BMW_ACTIVITY_COMMENT + today)) : 0;
    if (this.getCurrentTimeStamp() - 60 < this.keyGet(PHONE_MY_BMW_ACTIVITY_COMMENT + `lastTime`)) {
      console.log('鍏堢瓑绛夊啀璇勮...');
      return;
    }
    if (checkStatus>=4) {
        console.log('浠婃棩宸插畬鎴愯瘎璁�');
        return;
    }
    let req = new Request(`https://mybmw-web.navinfo.com/myBmwOmcApi/cis/eadrax-community/private-api/v2/comment/submit`);

    req.headers = {
        ...BMW_HEADERS,
        authorization: 'Bearer ' + accesstoken,
    };

    req.method = 'POST';
    req.body = JSON.stringify({
        "labels" : [
        ],
        "commentText" : this.activityCommentText(),
        "targetCode" : "",
        "targetCommentId" : "",
        "targetName" : "",
        "mediaFiles" : [
        ],
        "articleId" : `${postId}`,
        "commentId" : ""
      });

    const res = await req.loadJSON();
    if (res.code == 200) {
      this.keySave(PHONE_MY_BMW_ACTIVITY_COMMENT + today, `${checkStatus + 1}`);
      this.keySave(PHONE_MY_BMW_ACTIVITY_COMMENT + `lastTime`, `${this.getCurrentTimeStamp()}`);
      let message = `璇勮鎴愬姛銆傛瘡鏃ヤ笁娆�,褰撳墠鏄${checkStatus + 1}娆;
      console.log(message);
      this.notify('My BMW鎻愰啋', nowTime + message);
    }else {
      this.notify('My BMW鎻愰啋', `璇勮:${res.message}`);
    }
  }

  async getAppViewOptions() {
    return {
      widgetProvider: {
        small: true, // 鏄惁鎻愪緵灏忓彿缁勪欢
        medium: true, // 鏄惁鎻愪緵涓彿缁勪欢
        large: true, // 鏄惁鎻愪緵澶у彿缁勪欢
      },
      // 棰勮鐣岄潰鐨勭粍浠惰缃甶tem
      settingItems: [
        {
          name: 'accountLogin',
          label: '璐﹀彿鐧诲綍',
          type: 'cell',
          icon: { name: 'person.crop.rectangle', color: '#FD2953', },
          needLoading: true,
          desc: this.getHiddenStr(this.getValueByKey('phone')) || '鏈～鍐�'
        },
        {
          name: 'vin',
          label: '閫夋嫨杞﹁締',
          type: 'cell',
          icon: { name: 'car', color: '#30C758', },
          needLoading: true,
          desc: this.getHiddenStr(this.getValueByKey('vin')) || '榛樿'
        },
        {
          name: 'locationType',
          label: '鍦板潃璺宠浆',
          type: 'select',
          icon: { name: 'location.fill', color: '#6A63B8', },
          needLoading: false,
          options: [
            { label: '绯荤粺鍦板浘', value: 0 },
            { label: '鐧惧害鍦板浘', value: 1 },
            { label: '楂樺痉鍦板浘', value: 2 },
          ],
          default: this.locationType(),
        },
        {
          name: 'otherSetting',
          label: '鍏朵粬璁剧疆',
          type: 'cell',
          icon: `${this.getRemoteRootPath()}/img/setting.gif`,
          needLoading: true,
          childItems: [
            {
              items: [
                {
                  name: 'colorSetting',
                  label: '閰嶈壊璁剧疆',
                  type: 'cell',
                  icon: { name: 'paintpalette', color: '#66cd00', },
                  needLoading: true,
                  childItems: [
                    {
                      items: [
                        {
                          name: 'cleanColorSetting',
                          label: '杩樺師褰撳墠閫夐」',
                          type: 'cell',
                          icon: { name: 'return', color: '#dc143c', },
                          needLoading: true,
                        },
                      ],
                    },
                    {
                      items: [
                        {
                          name: 'titleDayColor',
                          label: '鏂囧瓧娴呰壊棰滆壊',
                          type: 'color',
                          icon: { name: 'sun.max', color: '#3a86ff', },
                          needLoading: false,
                          default: this.titleDayColor(),
                        },
                        {
                          name: 'titleNightColor',
                          label: '鏂囧瓧娣辫壊棰滆壊',
                          type: 'color',
                          icon: { name: 'moon.stars', color: '#3a0ca3', },
                          needLoading: false,
                          default: this.titleNightColor(),
                        },
                      ],
                    },
                    {
                      items: [
                        {
                          name: 'iconSafeDayColor',
                          label: '瀹夊叏鍥炬爣娴呰壊棰滆壊',
                          type: 'color',
                          icon: { name: 'sun.max', color: '#3a86ff', },
                          needLoading: false,
                          default: this.iconSafeDayColor(),
                        },
                        {
                          name: 'iconSafeNightColor',
                          label: '瀹夊叏鍥炬爣娣辫壊棰滆壊',
                          type: 'color',
                          icon: { name: 'moon.stars', color: '#3a0ca3', },
                          needLoading: false,
                          default: this.iconSafeNightColor(),
                        },
                      ],
                    },
                    {
                      items: [
                        {
                          name: 'iconUnsafeDayColor',
                          label: '璀﹀憡鍥炬爣娴呰壊棰滆壊',
                          type: 'color',
                          icon: { name: 'sun.max', color: '#3a86ff', },
                          needLoading: false,
                          default: this.iconUnsafeDayColor(),
                        },
                        {
                          name: 'iconUnsafeNightColor',
                          label: '璀﹀憡鍥炬爣娣辫壊棰滆壊',
                          type: 'color',
                          icon: { name: 'moon.stars', color: '#3a0ca3', },
                          needLoading: false,
                          default: this.iconUnsafeNightColor(),
                        },
                      ],
                    },
                    {
                      items: [
                        {
                          name: 'iconDayColor',
                          label: '淇℃伅鍥炬爣娴呰壊棰滆壊',
                          type: 'color',
                          icon: { name: 'sun.max', color: '#3a86ff', },
                          needLoading: false,
                          default: this.iconDayColor(),
                        },
                        {
                          name: 'iconNightColor',
                          label: '淇℃伅鍥炬爣娣辫壊棰滆壊',
                          type: 'color',
                          icon: { name: 'moon.stars', color: '#3a0ca3', },
                          needLoading: false,
                          default: this.iconNightColor(),
                        },
                      ],
                    },
                  ]
                },
              ],
            },

            {
              items: [
                {
                  name: 'show_tire_fuel_checks',
                  label: '鑳庡帇娌硅€楄秼鍔�',
                  type: 'switch',
                  icon: { name: 'chart.bar', color: '#2e8b57', },
                  default: this.show_tire_fuel_checks(),
                },
                {
                  name: 'show_signinPic_checks',
                  label: '鏄剧ず绛惧埌鍥炬爣',
                  type: 'switch',
                  icon: { name: 'checkmark.seal', color: '#ff4800', },
                  default: this.show_signinPic_checks(),
                },
                {
                  name: 'show_joyCoinText_checks',
                  label: '鏄剧ずJOY淇℃伅',
                  type: 'switch',
                  icon: { name: 'bitcoinsign.circle', color: '#6C00FF', },
                  default: this.show_joyCoinText_checks(),
                },
                /*
                {
                  name: 'show_coffeeText_checks',
                  label: '鏄剧ず鍜栧暋鎶㈣喘',
                  type: 'switch',
                  icon: { name: 'bell', color: '#4cc9f0', },
                  default: this.show_coffeeText_checks(),
                },*/
                {
                  name: 'show_control_checks',
                  label: '鏄剧ず杞﹁締妫€鏌�',
                  type: 'select',
                  icon: { name: 'wrench', color: '#27E1C1', },
                  needLoading: false,
                  options: [
                    { label: '涓嶆樉绀�', value: 0 },
                    { label: '鏄剧ず鎵€鏈夋鏌ヤ俊鎭�', value: 1 },
                    { label: '鍙樉绀篈LL GOOD', value: 2 },
                  ],
                  default: this.show_control_checks(),
                },
              ],
            },
            {
              items: [
                {
                  name: 'setCustomLogoImage',
                  label: 'Logo鍥剧墖鍦板潃',
                  type: 'cell',
                  icon: { name: 'photo.on.rectangle', color: '#ff4800', },
                  needLoading: true,
                  default: this.custom_logo_image()? '宸茶缃�' : '',
                },
                {
                  name: 'setCustomVehicleImage',
                  label: '杞﹁締鍥剧墖鍦板潃',
                  type: 'cell',
                  icon: { name: 'photo.on.rectangle', color: '#6C00FF', },
                  needLoading: true,
                  default: this.custom_vehicle_image()? '宸茶缃�' : '',
                },
                {
                  name: 'setCustomName',
                  label: '瀹氫箟杞﹁締鍚嶇О',
                  type: 'cell',
                  icon: { name: 'car.2', color: '#4cc9f0', },
                  needLoading: true,
                  default: this.custom_name()? '宸茶缃�' : '',
                },
                {
                  name: 'setMapApiKey',
                  label: '楂樺痉鍦板浘KEY',
                  type: 'cell',
                  icon: { name: 'key', color: '#7743DB', },
                  needLoading: true,
                  default: this.map_api_key()? '宸茶缃�' : '',
                },
                {
                  name: 'totalFuelLiters',
                  label: '璁剧疆娌圭瀹圭Н',
                  type: 'number',
                  icon: { name: 'l.rectangle.roundedbottom', color: '#228b22', },
                  needLoading: false,
                  default: this.totalFuelLiters(),
                },
                {
                  name: 'licensePlate',
                  label: '璁剧疆杞︾墝鍙风爜',
                  type: 'text',
                  icon: { name: 'rectangle.and.pencil.and.ellipsis', color: '#3333ff', },
                  needLoading: false,
                  default: this.licensePlate(),
                },
              ],
            },

            {
              items: [
                {
                  name: 'taskSetting',
                  label: '浜掑姩璁剧疆',
                  type: 'cell',
                  icon: { name: 'command', color: '#30C758', },
                  needLoading: true,
                  warnTip: {
                    title: '鈥硷笍鈥硷笍鎻愰啋鈥硷笍鈥硷笍',
                    message: `璇锋厧閲嶄娇鐢ㄨ鍔熻兘,璇ュ姛鑳介粯璁ゅ叧闂�,鐢ㄦ埛鑷寮€鍚�,娉ㄦ剰鈽笍鈽笍鈽笍淇敼浜掑姩閲岄潰鐨勬枃鏈唴瀹�,涓嶈鐢ㄩ粯璁ゅ€糮,
                    options: ['纭畾']
                  },
                  childItems: [
                    {
                      items: [
                        {
                          name: 'ActivityTimerVal',
                          label: '浜掑姩瀹氭椂',
                          type: 'time',
                          needLoading: false,
                          icon: { name: 'timer', color: '#11c4d4', },
                          default: this.ActivityTimerVal(),
                        },
                        {
                          name: 'activityAllTasks',
                          label: '鐐硅禐+璇勮+鏀惰棌',
                          type: 'switch',
                          icon: { name: 'newspaper', color: '#2176ff', },
                          default: this.getActivityAllTasksKey(),
                        },
                        {
                          name: 'activityFllow',
                          label: '姣忔棩鍏虫敞浠诲姟',
                          type: 'switch',
                          icon: { name: 'person.badge.plus', color: '#FD2953', },
                          default: this.getActivityFllowKey(),
                        },
                        {
                          name: 'activityTask_120S',
                          label: '姣忔棩娴忚浠诲姟',
                          type: 'switch',
                          icon: { name: 'eye', color: '#30C758', },
                          default: this.getActivityTask_120SKey(),
                        },
                        {
                          name: 'activityCoupon',
                          label: '姣忔棩棰嗗埜浠诲姟',
                          type: 'switch',
                          icon: { name: 'tag', color: '#4f4f2f', },
                          default: this.getActivityCouponKey(),
                        },
                        {
                          name: 'activityPostMoment',
                          label: '姣忔棩鍔ㄦ€佷换鍔�',
                          type: 'switch',
                          icon: { name: 'text.insert', color: '#264653', },
                          default: this.getActivityPostMomentKey(),
                        },
                        {
                          name: 'activityCarLink',
                          label: '姣忔棩杞﹁締鑱斿姩',
                          type: 'switch',
                          icon: { name: 'cloud', color: '#33CC33', },
                          default: this.getActivityCarLinkKey(),
                        },
                        {
                          name: 'setActivityPostArticlePwd',
                          label: '姣忔棩鏂囩珷浠诲姟',
                          type: 'cell',
                          needLoading: true,
                          icon: { name: 'heart.text.square', color: '#ee00ee', },
                          default: this.getHiddenStr(`${this.getActivityPostArticlePwd()}`) || '鏈紑鍚�',
                        },
                        {
                          name: 'activityCommentText',
                          label: '璇勮鍐呭(璇蜂慨鏀�,鍕跨敤榛樿鍐呭)',
                          type: 'textarea',
                          placeholder: this.defaultPreference['activityCommentText'],
                          rows: 2,
                          icon: { name: 'text.bubble', color: '#e85d04', },
                          default: this.activityCommentText(),
                        },
                        {
                          name: 'activityPostMomentText',
                          label: '姣忔棩鍔ㄦ€�(璇蜂慨鏀�,鍕跨敤榛樿鍐呭)',
                          type: 'textarea',
                          placeholder: this.defaultPreference['activityPostMomentText'],
                          rows: 2,
                          icon: { name: 'text.insert', color: '#264653', },
                          default: this.activityPostMomentText(),
                        },
                      ],
                    },
                  ]
                },
              ],
            },

          ]
        },
        {
          name: 'oneKeyPickLuck',
          label: '棰嗗彇鏉冪泭',
          type: 'cell',
          icon: { name: 'gift', color: '#3a86ff', },
          needLoading: false
        },
        {
          name: 'question',
          label: '浣跨敤鏁欑▼',
          type: 'cell',
          //className: 'flashing',
          icon: { name: 'questionmark.circle', color: '#ff00ff', },
          needLoading: true,
          //openWeb: 'https://docs.qq.com/doc/DQU1vTExtakFMTUND'
        },
        {
          name: 'joinwxGroup',
          label: '鍔犲井淇＄兢',
          type: 'cell',
          //className: 'flashing',
          icon: { name: 'rectangle.3.group.bubble.left', color: '#1AAD19', },
          needLoading: true,
          openWeb: 'https://docs.qq.com/doc/DQXVEdWRJc0hkWlRq'
        },
        /*{
          name: 'debugBtn',
          label: '璋冭瘯鎸夐挳',
          type: 'cell',
          needLoading: true,
          icon: { name: 'questionmark.circle', color: '#ff00ff', },
          //openWeb: 'https://docs.qq.com/doc/DQU1vTExtakFMTUND'
        },*/
      ],
      // cell绫诲瀷鐨刬tem鐐瑰嚮鍥炶皟
      onItemClick: async (item) => {
        const widgetSetting = this.readWidgetSetting();
        let insertDesc = '';
        console.log(item.name)
        switch (item.name) {
          case 'accountLogin':
            let response = await this.generateAlert(`閮戦噸澹版槑`, `灏忕粍浠堕渶瑕佷娇鐢ㄥ埌鎮ㄧ殑BMW璐﹀彿\n\r\n棣栨鐧诲綍璇烽厤缃处鍙枫€侀獙璇佺爜/瀵嗙爜杩涜浠ょ墝鑾峰彇\n\r\n灏忕粍浠朵笉浼氭敹闆嗘偍鐨勪釜浜鸿处鎴蜂俊鎭紝鎵€鏈夎处鍙蜂俊鎭皢瀛樺湪iCloud鎴栬€卛Phone涓婁絾涔熻鎮ㄥΕ鍠勪繚绠¤嚜宸辩殑璐﹀彿\n\r\n灏忕粍浠舵槸寮€婧愩€佸苟涓斿畬鍏ㄥ厤璐圭殑锛岀敱BMW杞︿富寮€鍙戯紝鎵€鏈夎矗浠讳笌BMW鍏徃鏃犲叧\n\r\n寮€鍙戣€�: meiDaiSan`, ["鍚屾剰"], "鍙栨秷")
            if (response == -1) return null;
            let phone, password;
            let loginMethon = await this.presentSheet({
              showCancel: true,
              cancelText: '鍙栨秷',
              title: `鐧诲綍鏂瑰紡`,
              message: `閫夋嫨閫傚悎鐨勭櫥褰曟柟寮廯,
              options: [
                { name: '璐﹀彿鍜屽瘑鐮�' },
                { name: '鐭俊楠岃瘉鐮�' }
              ],
            });
            if (loginMethon == 0) {//瀵嗙爜鐧诲綍
              let resIndex = await this.generateInputAlert({
                title: '閰嶇疆BMW鐧诲綍',
                message: '浣跨敤瀵嗙爜鎺堟潈鐧诲綍',
                confirmText: '鐧诲綍',
                options: [
                  { hint: '璇疯緭鍏ユ墜鏈哄彿鐮�', value: widgetSetting?.phone?this.formatUserMobile(widgetSetting?.phone) : '' },
                  { hint: '璇疯緭鍏ヨ处鍙峰瘑鐮�', value: widgetSetting?.password ? widgetSetting?.password : '' }
                ]
              }, async (inputArr) => {
                this.reset = true;
                phone = inputArr[0].value;
                password = inputArr[1].value;
                // 淇濆瓨閰嶇疆
                widgetSetting['phone'] = this.formatUserMobile(phone);
                widgetSetting['password'] = password;
              });
              if (resIndex == 0 || !phone || !password) return null;
              insertDesc = this.getHiddenStr(widgetSetting['phone']) || '鏈～鍐�';
              this.writeWidgetSetting({ ...widgetSetting });
              let encryptPassword = await this.getEncryptedPassword(password);
              let verifyId = await this.getSliderCaptcha(this.formatUserMobile(phone));
              await this.myBMWLoginPwd(verifyId, this.formatUserMobile(phone), encryptPassword)
              
            }
            if (loginMethon == 1) {//楠岃瘉鐮佺櫥褰�
              let resIndex = await this.generateInputAlert({
                title: '閰嶇疆BMW鐧诲綍',
                message: '浣跨敤鐭俊鎺堟潈鐧诲綍',
                confirmText: '鍙戦€佺煭淇�',
                options: [
                  { hint: '璇疯緭鍏ユ墜鏈哄彿鐮�', value: widgetSetting?.phone?this.formatUserMobile(widgetSetting?.phone) : '' }
                ]
              }, async (inputArr) => {
                this.reset = true;
                phone = inputArr[0].value;
                // 淇濆瓨閰嶇疆
                widgetSetting['phone'] = this.formatUserMobile(phone);
              });
              if (resIndex == 0 || !phone) return null;
              //this.cookie = widgetSetting.cookie;
              insertDesc = this.getHiddenStr(widgetSetting['phone']) || '鏈～鍐�';
              this.writeWidgetSetting({ ...widgetSetting });
              let otpId = await this.sendLoginSMS();
              if (!otpId) {
                  return;
              }
              await this.myBMWLogin(otpId);
            }
            break;
          case 'vin':
            let carList = await this.getVehicleList(await this.getAccessToken());
            if (carList){
              const userConfigVinAlert = new Alert();
              userConfigVinAlert.title = '榛樿绗竴杈嗚溅(涓€杈嗚溅鏃犻渶璁剧疆)';
              carList.map((item)=>{
                  userConfigVinAlert.addAction(`${item.brand} ${item.model}-[${item.vin}]`)
              })
              userConfigVinAlert.addCancelAction("鍙栨秷");
              const id = await userConfigVinAlert.presentSheet();
              if (id >= 0 && id < carList.length) {
                insertDesc = this.getHiddenStr(carList[id].vin) || '榛樿';
                this.writeWidgetSetting({ ...widgetSetting, vin: carList[id].vin });
              }
            }else{
              await this.generateAlert('閫夋嫨澶辫触', '璇风‘淇濆凡缁忕櫥褰�,涓斿悕涓嬫湁杞�', ['纭畾']);
            }
            break;
          case 'setCustomLogoImage':
            await this.generateInputAlert({
              title: 'logo鍥剧墖',
              message: 'logo鍥剧墖URL(榛樿鑷姩鑾峰彇)',
              options: [{ hint: '馃敆 璇疯緭鍏ュ浘鐗囬摼鎺�', value: this.custom_logo_image()??'' }]
            }, async (inputArr) => {
              let imgUrl = inputArr[0].value;
              insertDesc = imgUrl? '宸茶缃�':'鏈～鍐�';
              this.writeWidgetSetting({ ...widgetSetting, custom_logo_image: imgUrl });
            });
            break;
          case 'setCustomVehicleImage':
            await this.generateInputAlert({
              title: '杞﹁締鍥剧墖',
              message: '杞﹁締鍥剧墖URL(榛樿鑷姩鑾峰彇)',
              options: [{ hint: '馃敆 璇疯緭鍏ュ浘鐗囬摼鎺�', value: this.custom_vehicle_image()??'' }]
            }, async (inputArr) => {
              let imgUrl = inputArr[0].value;
              insertDesc = imgUrl? '宸茶缃�':'鏈～鍐�';
              this.writeWidgetSetting({ ...widgetSetting, custom_vehicle_image: imgUrl });
            });
            break;
          case 'setCustomName':
            await this.generateInputAlert({
              title: '杞﹀悕',
              message: '鑷畾涔夎溅杈嗗悕绉�',
              options: [{ hint: '杞﹁締鍚嶇О(榛樿鑷姩鑾峰彇)', value: this.custom_name()??'' }]
            }, async (inputArr) => {
              let name = inputArr[0].value;
              insertDesc = name? '宸茶缃�':'鏈～鍐�';
              this.writeWidgetSetting({ ...widgetSetting, custom_name: name });
            });
            break;
          case 'oneKeyPickLuck':
            await this.userReceiveLuckIn();
            break;
          case 'question':
            const res = await this.presentSheet({
              showCancel: true,
              cancelText: '鍙栨秷',
              title: `灏忕粍浠舵暀绋媊,
              message: `浣跨敤纰板埌闂,璇峰厛鐪嬫暀绋媊,
              options: [
                { name: '瑙嗛鏁欑▼1' },
                { name: '瑙嗛鏁欑▼2' },
                { name: '瑙嗛鏁欑▼3' },
                { name: '閿佸睆鏁欑▼' },
                { name: '鏂囨。鏁欑▼' }
              ],
            });
            if (res == 0) {
              Safari.open('snssdk1128://aweme/detail/7304624897882377535')
            }
            if (res == 1) {
              Safari.open('snssdk1128://aweme/detail/7313939151466794240')
            }
            if (res == 2) {
              Safari.open('snssdk1128://aweme/detail/7306459994877103370')
            }
            if (res == 3) {
              Safari.open('snssdk1128://aweme/detail/7307586780243561766')
            }           
            if (res == 4) {
              Safari.open('https://docs.qq.com/doc/DQU1vTExtakFMTUND')
            }
            break;
          case 'setMapApiKey':
            await this.generateInputAlert({
              title: '楂樺痉鍦板浘KEY',
              message: '璇峰～鍐欑敵璇风殑楂樺痉Key',
              options: [{ hint: '闈炲ぇ缁勪欢,鍙互涓嶅～', value: this.map_api_key()??'' }]
            }, async (inputArr) => {
              let name = inputArr[0].value;
              insertDesc = name? '宸茶缃�':'鏈～鍐�';
              this.writeWidgetSetting({ ...widgetSetting, map_api_key: name});
            });
            break;
          case 'setActivityPostArticlePwd':
            await this.generateInputAlert({
              title: '杈撳叆寮€鍚瘑鐮�',
              message: '璇ュ姛鑳介殢鏈烘惉杩愮ぞ鍖虹儹鐐圭簿鍗庡唴瀹�,璁╂搷浣滄洿鍌荤摐寮廫n\n鍙戣繃闅忓嵆鍒犻櫎,涓嶅甫璧颁竴鐗囦簯褰‐n\n鐗瑰畾鐢ㄦ埛:璇峰悜绠＄悊鍛樼储瑕佸瘑鐮乗n!!璇ュ姛鑳藉畬鍏ㄧ敱鐢ㄦ埛鑷繁璐熻矗寮€鍚�',
              options: [{ hint: '杈撳叆瓒呯骇瀵嗙爜', value: this.getActivityPostArticlePwd()??'' }]
            }, async (inputArr) => {
              let pwd = inputArr[0].value;
              insertDesc = this.getHiddenStr(pwd) || '鏈紑鍚�';
              this.writeWidgetSetting({ ...widgetSetting, activityPostArticlePwd: pwd.trim() });
            });
            break;
          case 'cleanColorSetting':
            this.writeWidgetSetting({...this.readWidgetSetting(),
              titleDayColor: '#1d1d1d',
              titleNightColor: '#ffffff',
              iconSafeDayColor: '#1aab15',
              iconSafeNightColor: '#1aab15',
              iconUnsafeDayColor: '#eb4d3d',
              iconUnsafeNightColor: '#eb4d3d',
              iconDayColor: '#1d1d1d',
              iconNightColor: '#ffffff',
            })
            await this.generateAlert(`杩樺師鎴愬姛`,'涓昏缃晫闈㈤瑙堢湅鐪嬫晥鏋滃惂',['濂界殑'])
            break;  
          case 'debugBtn':
            let accessToken = await this.getAccessToken();
            //await this.activityPostArticle(accessToken)
            /*娴嬭瘯娴忚120S浠诲姟*/
            
            
            await this.activityHomePage(accessToken);
            await this.activityTrigger(accessToken);
            await this.delay(3000);
            await this.activityHomePage(accessToken);
            
            break;
          default:
            console.log(item)
            break;    
        }
        return {
          desc: { value: insertDesc },
        };
      },
      onCheckedChange: async (data, widgetSetting) => {
        console.log(`onCheckedChange********`);
        console.log(data);
        console.log(widgetSetting);
        if (widgetSetting.show_tire_fuel_checks != data.show_tire_fuel_checks) {
          this.keyRemove('VIN_sustainabilityTime')
        }

      }
    };
  }

  async getAppLogo() {
    let logoURL = this.custom_logo_image()? this.custom_logo_image() : DEFAULT_LOGO_LIGHT;
    return await this.getImageByUrl(logoURL);
  }
  async renderError(errMsg) {
    let w = new ListWidget();
    const padding = 3;
    w.setPadding(padding, padding, padding, padding);
    w.addStack().addText(errMsg);
    return w;
  }
  async render({ widgetSetting, family }) {
    let phone = this.getValueByKey('phone');
    if (!phone) {
      return await this.renderError(`鍏堥厤缃处鍙蜂俊鎭�,璇峰涓嬫搷浣�:\n1銆佹墦寮€[scriptable]鎵惧埌${Script.name()}\n2銆佹墦寮€鑴氭湰,閫夋嫨[璐﹀彿鐧诲綍]`);
    }
    let data = await this.getData();
    console.log(data)
    if (!data) {
      return await this.renderError(`鎺堟潈淇℃伅杩囨湡,璇峰涓嬫搷浣�:\n[#璇峰姟蹇呭畬鎴愪笅鍒楁搷浣滃啀闂负浠€涔�#]\n1銆佹墦寮€[scriptable]鎵惧埌${Script.name()}\n2銆佹墦寮€鑴氭湰,閫夋嫨[缁勪欢鏇存柊]\n3銆佸啀閫夋嫨[璐﹀彿鐧诲綍]`);
    }
    if (data.black){
      return await this.renderError('鎮ㄧ殑璐﹀彿琚檺鍒朵娇鐢ㄦ湰灏忕粍浠禱n鎻愮ず:璇蜂娇鐢ㄥ叾浠栧紑鍙戣€呯殑灏忕粍浠�');
    }
    switch (family) {
      case 'large':
          return await this.renderLarge(data);
      case 'medium':
          return await this.renderMedium(data);
      case "accessoryRectangular":
          return await this.renderRectangular(data);
      default:
          return await this.renderSmall(data);
    }
    //return await this.provideSmallWidget();
  }
  async renderRectangular(data) {
    let w = new ListWidget();
    let fontColor = new Color('#fff',1)??this.getFontColor();

    const {width, height} = this.getWidgetSize('灏忓彿');
    const paddingLeft = Math.round(width * 0.07);

    w.setPadding(0, 0, 0, 0);

    const topBox = w.addStack();
    topBox.layoutHorizontally();
    topBox.setPadding(0, 0, 0, 0);

    // ---椤堕儴宸﹁竟閮ㄤ欢---
    const topLeftContainer = topBox.addStack();

    const vehicleNameContainer = topLeftContainer.addStack();
    vehicleNameContainer.setPadding(2, 0, 0, 0);

    let vehicleNameStr = data.brand + ` ` + data.model.replace("xDrive","");
    vehicleNameStr = this.custom_name()?? vehicleNameStr;
    const vehicleNameText = vehicleNameContainer.addText(vehicleNameStr);

    // get dynamic size
    let vehicleNameSize = Math.round(width * 0.12);

    if (vehicleNameStr.length >= 10) {
        vehicleNameSize = vehicleNameSize - Math.round(vehicleNameStr.length / 4);
    }

    vehicleNameText.leftAlignText();
    vehicleNameText.font = this.getFont(`${WIDGET_FONT_BOLD}`, 13);
    vehicleNameText.textColor = fontColor;
    // ---椤堕儴宸﹁竟閮ㄤ欢瀹�---

    topBox.addSpacer();

    // ---椤堕儴鍙宠竟閮ㄤ欢---
    const topRightBox = topBox.addStack();
    topRightBox.setPadding(6, 0, 0, paddingLeft);

    if (!this.custom_logo_image()) {
        topRightBox.setPadding(2, 0, 0, paddingLeft);
    }

    try {
        let logoImage = await this.getAppLogo();
        let logoImageWidget = topRightBox.addImage(logoImage);

        let logoContainerWidth = Math.round(width * 0.1);
        let imageSize = this.getImageSize(
            logoImage.size.width,
            logoImage.size.height,
            Math.round(logoContainerWidth * 2.5),
            logoContainerWidth,
            0.99
        );

        logoImageWidget.imageSize = new Size(imageSize.width, imageSize.height);
    } catch (e) {}
    // ---椤堕儴鍙宠竟閮ㄤ欢瀹�---

    // ---涓棿閮ㄤ欢---
    const carInfoContainer = w.addStack();
    carInfoContainer.layoutVertically();
    carInfoContainer.setPadding(4, 0, 0, 0);

    const kmContainer = carInfoContainer.addStack();
    kmContainer.layoutHorizontally();
    kmContainer.bottomAlignContent();

    try {
        let levelValue = data.properties.hasOwnProperty('electricChargingState')?data.properties.electricChargingState.chargingLevelPercent : data.properties.combustionFuelLevel?.remainingFuelPercent;
        let levelUnits = '%';
        let remainingFuelLiters = data.properties.combustionFuelLevel?.remainingFuelLiters;//鍓╀綑鐕冩补澶氬皯L
        const rangeValue = data.properties.combustionFuelLevel?.range || '--';
        const rangeUnits = '銕�';
        const kmText = kmContainer.addText(rangeValue + rangeUnits);
        kmText.font = this.getFont(`${WIDGET_FONT}`, 14);
        kmText.textColor = fontColor;

        const levelContainer = kmContainer.addStack();

        if (!levelValue){
            levelValue = remainingFuelLiters;
            levelUnits = `L`;
        }
        if (!remainingFuelLiters && data.properties.combustionFuelLevel?.remainingFuelPercent && Number(this.totalFuelLiters()) > 0) {
          remainingFuelLiters = (Number(this.totalFuelLiters()) * data.properties.combustionFuelLevel?.remainingFuelPercent/100).toFixed(0);
        }
        if (levelValue) {
            const separator = levelContainer.addText('/');
            separator.font = this.getFont(`${WIDGET_FONT}`, 12);
            separator.textColor = fontColor;

            const levelText = levelContainer.addText(levelValue + levelUnits);
            levelText.font = this.getFont(`${WIDGET_FONT}`, 13);
            levelText.textColor = fontColor;
        }
        

        if (parseFloat(data.properties.averageConsumption[1]) || remainingFuelLiters/rangeValue ){
            const oilConsumption = parseFloat(data.properties.averageConsumption[1])? data.properties.averageConsumption[1] : (remainingFuelLiters/rangeValue*100).toFixed(1);
            const separatorYouHao = levelContainer.addText('/');
            separatorYouHao.font = this.getFont(`${WIDGET_FONT}`, 13);
            separatorYouHao.textColor = fontColor;
            const averageConsumptionText = oilConsumption? `${data.properties.averageConsumption[0]}:${oilConsumption}`:'';
            const oilConsumptionText = levelContainer.addText(`${averageConsumptionText}`);
            oilConsumptionText.font = this.getFont(`${WIDGET_FONT}`, 13);
            oilConsumptionText.textColor = fontColor;

        }
    } catch (e) {
        console.error(e.message);
        kmContainer.addText(`鑾峰彇閲岀▼澶辫触`);
    }
    

    const carStatusContainer = carInfoContainer.addStack();
    carStatusContainer.setPadding(2, 0, 0, 0);

    const carStatusBox = carStatusContainer.addStack();
    carStatusBox.setPadding(3, 3, 3, 3);
    carStatusBox.layoutHorizontally();
    carStatusBox.centerAlignContent();
    carStatusBox.cornerRadius = 4;
    carStatusBox.backgroundColor = this.getFocusedBackgroundColor();

    try {
        const doorCombinedState = (data.properties.doorsState?.combinedSecurityState??'UNLOCKED') == "UNLOCKED"? 0 : 1;

        let carStatsResMap = doorCombinedState?[WIDGET_LOCKED_ICON,this.getIconSafeColor()]:[WIDGET_UNLOCKED_ICON,this.getIconUnsafeColor()];
        let exclamation = SFSymbol.named(carStatsResMap[0]).image;
        let resColor = carStatsResMap[1];
        let statusImageWidget = carStatusBox.addImage(exclamation);
        statusImageWidget.tintColor = resColor;
        statusImageWidget.imageSize = new Size(13, 13);

        const ConnectedDriving = data.properties.hasOwnProperty('doorsState') && data.properties.hasOwnProperty('windowsState');
        let lockText = doorCombinedState?"宸蹭笂閿�":"宸茶В閿�";
        lockText = ConnectedDriving == false? '浜掕仈杩囨湡' : lockText;
        const carStatusTxt = carStatusBox.addText(lockText);

        let displayFont = WIDGET_FONT;
        let displayFontColor = fontColor;

        if (data.properties && doorCombinedState == 0) {
            displayFontColor = new Color(WIDGET_DANGER_COLOR, 1);
            displayFont = WIDGET_FONT_BOLD;
        }
        
        carStatusTxt.font = this.getFont(displayFont, 10);
        carStatusTxt.textColor = displayFontColor;

        let statusLabel = this.formatStatusLabel(data);
        const updateTxt = carStatusBox.addText(statusLabel);
        updateTxt.font = this.getFont(`${WIDGET_FONT}`, 10);
        updateTxt.textColor = fontColor;
    } catch (e) {
        console.error(e);
        carStatusBox.addText(`鑾峰彇杞﹂棬鐘舵€佸け璐);
    }

    // ---涓棿閮ㄤ欢瀹�---

    w.url = 'de.bmw.connected.mobile20.cn://'; // BASEURL + encodeURI(SHORTCUTNAME);

    return w;
  }

  async renderSmall(data) {
    let w = new ListWidget();
    let fontColor = this.getFontColor();

    const {width, height} = this.getWidgetSize('灏忓彿');
    const paddingLeft = Math.round(width * 0.07);

    w.setPadding(0, 0, 0, 0);

    const topBox = w.addStack();
    topBox.layoutHorizontally();
    topBox.setPadding(0, 0, 0, 0);

    // ---椤堕儴宸﹁竟閮ㄤ欢---
    const topLeftContainer = topBox.addStack();

    const vehicleNameContainer = topLeftContainer.addStack();
    vehicleNameContainer.setPadding(paddingLeft, paddingLeft, 0, 0);

    let vehicleNameStr = `${data.brand} ${data.model}`;
    vehicleNameStr = this.custom_name()?? vehicleNameStr;
    const vehicleNameText = vehicleNameContainer.addText(vehicleNameStr);

    // get dynamic size
    let vehicleNameSize = Math.round(width * 0.12);

    if (vehicleNameStr.length >= 10) {
        vehicleNameSize = vehicleNameSize - Math.round(vehicleNameStr.length / 4);
    }

    vehicleNameText.leftAlignText();
    vehicleNameText.font = this.getFont(`${WIDGET_FONT_BOLD}`, vehicleNameSize);
    vehicleNameText.textColor = fontColor;
    // ---椤堕儴宸﹁竟閮ㄤ欢瀹�---

    topBox.addSpacer();

    // ---椤堕儴鍙宠竟閮ㄤ欢---
    const topRightBox = topBox.addStack();
    topRightBox.setPadding(6, 0, 0, paddingLeft);

    if (!this.custom_logo_image()) {
        topRightBox.setPadding(paddingLeft, 0, 0, paddingLeft);
    }

    try {
        let logoImage = await this.getAppLogo();
        let logoImageWidget = topRightBox.addImage(logoImage);

        let logoContainerWidth = Math.round(width * 0.1);
        let imageSize = this.getImageSize(
            logoImage.size.width,
            logoImage.size.height,
            Math.round(logoContainerWidth * 2.5),
            logoContainerWidth,
            0.99
        );

        logoImageWidget.imageSize = new Size(imageSize.width, imageSize.height);
    } catch (e) {}
    // ---椤堕儴鍙宠竟閮ㄤ欢瀹�---

    // ---涓棿閮ㄤ欢---
    const carInfoContainer = w.addStack();
    carInfoContainer.layoutVertically();
    carInfoContainer.setPadding(8, paddingLeft, 0, 0);

    const kmContainer = carInfoContainer.addStack();
    kmContainer.layoutHorizontally();
    kmContainer.bottomAlignContent();

    try {
        const levelValue = data.properties.hasOwnProperty('electricChargingState')?data.properties.electricChargingState.chargingLevelPercent : data.properties.combustionFuelLevel?.remainingFuelPercent;
        const levelUnits = '%';
        const rangeValue = data.properties.combustionFuelLevel?.range || '--';
        const rangeUnits = '銕�';
        const kmText = kmContainer.addText(rangeValue + rangeUnits);
        kmText.font = this.getFont(`${WIDGET_FONT}`, 17);
        kmText.textColor = fontColor;

        const levelContainer = kmContainer.addStack();
        if (levelValue){
            const separator = levelContainer.addText(' / ');
            separator.font = this.getFont(`${WIDGET_FONT}`, 12);
            separator.textColor = fontColor;
            separator.textOpacity = 0.6;

            const levelText = levelContainer.addText(levelValue + levelUnits);
            levelText.font = this.getFont(`${WIDGET_FONT}`, 14);
            levelText.textColor = fontColor;
            levelText.textOpacity = 0.6;
        }
        
    } catch (e) {
        console.error(e.message);
        //kmContainer.addText(`鑾峰彇閲岀▼澶辫触`);
    }

    const carStatusContainer = carInfoContainer.addStack();
    carStatusContainer.setPadding(0, 0, 0, 0);

    const carStatusBox = carStatusContainer.addStack();
    carStatusBox.setPadding(3, 3, 3, 3);
    carStatusBox.layoutHorizontally();
    carStatusBox.centerAlignContent();
    carStatusBox.cornerRadius = 4;
    carStatusBox.backgroundColor = this.getFocusedBackgroundColor();

    try {
        const doorCombinedState = (data.properties.doorsState?.combinedSecurityState??'UNLOCKED') == "UNLOCKED"? 0 : 1;

        let carStatsResMap = doorCombinedState?[WIDGET_LOCKED_ICON,this.getIconSafeColor()]:[WIDGET_UNLOCKED_ICON,this.getIconUnsafeColor()];
        let exclamation = SFSymbol.named(carStatsResMap[0]).image;
        let resColor = carStatsResMap[1];
        let statusImageWidget = carStatusBox.addImage(exclamation);
        statusImageWidget.tintColor = resColor;
        statusImageWidget.imageSize = new Size(13, 13);

        const ConnectedDriving = data.properties.hasOwnProperty('doorsState') && data.properties.hasOwnProperty('windowsState');
        let lockText = doorCombinedState?"宸蹭笂閿�":"宸茶В閿�";
        lockText = ConnectedDriving == false? '浜掕仈杩囨湡' : lockText;
        const carStatusTxt = carStatusBox.addText(lockText);

        let displayFont = WIDGET_FONT;
        let displayFontColor = fontColor;
        
        carStatusTxt.font = this.getFont(displayFont, 10);
        carStatusTxt.textColor = displayFontColor;
        carStatusTxt.textOpacity = 0.7;
        carStatusBox.addSpacer(5);

        let statusLabel = this.formatStatusLabel(data);
        const updateTxt = carStatusBox.addText(statusLabel);
        updateTxt.font = this.getFont(`${WIDGET_FONT}`, 10);
        updateTxt.textColor = fontColor;
        updateTxt.textOpacity = 0.5;
    } catch (e) {
        console.error(e);
        carStatusBox.addText(`鑾峰彇杞﹂棬鐘舵€佸け璐);
    }

    // ---涓棿閮ㄤ欢瀹�---

    w.addSpacer();

    // ---搴曢儴閮ㄤ欢---

    const carImageContainer = w.addStack();
    let canvasWidth = Math.round(width * 0.85);
    let canvasHeight = Math.round(width * 0.4);

    carImageContainer.setPadding(0, paddingLeft, 6, 0);
    if (!this.show_control_checks()) {
        carImageContainer.layoutHorizontally();
        carImageContainer.addSpacer();
        carImageContainer.setPadding(6, paddingLeft, 6, paddingLeft);
    }

    let image = await this.getCarCanvasImage(data, canvasWidth, canvasHeight, 0.95);
    let carStatusImage = carImageContainer.addImage(image);
    carStatusImage.resizable = !this.show_control_checks();
    // ---搴曢儴閮ㄤ欢瀹�---

    w.url = 'de.bmw.connected.mobile20.cn://'; // BASEURL + encodeURI(SHORTCUTNAME);

    return w;
  }

  async renderMedium(data, renderLarge = false) {
    let w = new ListWidget();
    let fontColor = this.getFontColor();
    
   

    w.setPadding(0, 0, 0, 0);
    const {width, height} =  this.getWidgetSize('涓彿');

    let paddingTop = Math.round(height * 0.09);
    let paddingLeft = Math.round(width * 0.055);

    let renderMediumContent = !renderLarge || this.map_api_key();

    const topContainer = w.addStack();
    topContainer.layoutHorizontally();

    const vehicleNameContainer = topContainer.addStack();
    vehicleNameContainer.layoutHorizontally();
    vehicleNameContainer.setPadding(paddingTop, paddingLeft, 0, 0);

    let vehicleNameStr = `${data.brand} ${data.model}`;
    vehicleNameStr = this.custom_name()?? vehicleNameStr;
    const vehicleNameText = vehicleNameContainer.addText(vehicleNameStr);

    let vehicleNameSize = 24;

    if (vehicleNameStr.length >= 10) {
        vehicleNameSize = vehicleNameSize - Math.round(vehicleNameStr.length / 4);
    }

    vehicleNameText.font = this.getFont(`${WIDGET_FONT_BOLD}`, vehicleNameSize);
    vehicleNameText.textColor = fontColor;
    vehicleNameContainer.addSpacer();


    const licensePlateContainer = topContainer.addStack();
    licensePlateContainer.layoutHorizontally();
    licensePlateContainer.setPadding(Math.round(height * 0.12), 0, 0, 8);
    const licensePlateText = licensePlateContainer.addText(`${this.licensePlate() || data.licensePlate || ''}`);
    licensePlateText.font = this.getFont(`${WIDGET_FONT}`, 12);
    licensePlateText.textColor = fontColor;

    const logoImageContainer = topContainer.addStack();
    logoImageContainer.layoutHorizontally();
    logoImageContainer.setPadding(paddingTop, 0, 0, paddingTop);

    try {
        let logoImage = logoImageContainer.addImage(await this.getAppLogo());
        logoImage.rightAlignImage();
    } catch (e) {}


    const bodyContainer = w.addStack();
    //bodyContainer.backgroundColor = new Color('#FF0000', 0.45);
    //bodyContainer.layoutHorizontally();
    const leftContainer = bodyContainer.addStack();

    leftContainer.layoutVertically();
    leftContainer.size = new Size(Math.round(width * 0.85), Math.round(height * 0.75));
    if (renderMediumContent) {
        leftContainer.size = new Size(Math.round(width * 0.5), Math.round(height * 0.75));
    }
    leftContainer.setPadding(-3, 0, 0, 0);
    const kmContainer = leftContainer.addStack();
    kmContainer.setPadding(0, paddingLeft, 0, 0);
    //kmContainer.layoutHorizontally();
    leftContainer.addSpacer(2);
    const mileageContainer = leftContainer.addStack();
    mileageContainer.setPadding(0, paddingLeft, 0, 0);

    try {
        let levelValue = data.properties.electricChargingState?.chargingLevelPercent || data.properties.combustionFuelLevel?.remainingFuelPercent || '';//鍓╀綑娌圭數鐨�%
        let remainingFuelLiters = data.properties.combustionFuelLevel?.remainingFuelLiters;//鍓╀綑鐕冩补澶氬皯L
        if (!levelValue && remainingFuelLiters && Number(this.totalFuelLiters()) > 0 ) {//濡傛灉涓嶆樉绀洪偖绠辩櫨鍒嗘瘮,涓旂煡閬撳墿浣欏灏戞补閲�
          levelValue = (remainingFuelLiters/Number(this.totalFuelLiters())*100).toFixed(0);
        }
        if (!remainingFuelLiters && data.properties.combustionFuelLevel?.remainingFuelPercent && Number(this.totalFuelLiters()) > 0) {
          remainingFuelLiters = (Number(this.totalFuelLiters()) * data.properties.combustionFuelLevel?.remainingFuelPercent/100).toFixed(0);
        }
        const levelUnits = levelValue?'%':'';
        const rangeValue = data.properties.combustionFuelLevel?.range || '--'; //鍓╀綑缁埅閲岀▼
        const rangeUnits = '銕�';
        const currentMileage = data.properties.currentMileage || '- -';//鎬婚噷绋�
        
        const oilConsumption = parseFloat(data.properties.averageConsumption[1]) ? data.properties.averageConsumption[1] :  (remainingFuelLiters/rangeValue*100).toFixed(1) || `- -`;//娌硅€�
        
        const rangeContainer = kmContainer.addStack();
        rangeContainer.size = new Size(Math.round(width * 0.25), 15);

        let rangeContainerIcon = SFSymbol.named(`globe.asia.australia`)?.image || SFSymbol.named(`globe`)?.image;// iOS 15+
        let rangeContainerWidget = rangeContainer.addImage(rangeContainerIcon);
        rangeContainerWidget.imageSize = new Size(14, 14);
        rangeContainerWidget.tintColor = this.getIconColor();

        const kmText = rangeContainer.addText(` ` + currentMileage + rangeUnits);
        kmText.font = this.getFont(`${WIDGET_FONT}`, 12);
        kmText.textColor = fontColor;
        rangeContainer.addSpacer();

        const leftRangeContainer = kmContainer.addStack();
        let leftRangeContainerIcon = SFSymbol.named(`map`).image;//14+
        let leftRangeContainerWidget = leftRangeContainer.addImage(leftRangeContainerIcon);
        leftRangeContainerWidget.imageSize = new Size(14, 14);
        leftRangeContainerWidget.tintColor = this.getIconColor();
        const kmText2 = leftRangeContainer.addText(` `+ rangeValue + rangeUnits);
        kmText2.font = this.getFont(`${WIDGET_FONT}`, 12);
        kmText2.textColor = fontColor;
        
        //鍒嗚
        const levelValueContainer = mileageContainer.addStack();
        levelValueContainer.size = new Size(Math.round(width * 0.25), 15);

        let fuelOrElectric = data.properties.hasOwnProperty("electricChargingState")?`minus.plus.batteryblock`:`fuelpump`;//
        let levelValueContainerIcon = SFSymbol.named(fuelOrElectric)?.image || SFSymbol.named(`car`)?.image;
        let levelValueContainerWidget = levelValueContainer.addImage(levelValueContainerIcon);
        levelValueContainerWidget.imageSize = new Size(14, 14);
        levelValueContainerWidget.tintColor = this.getIconColor();

        let levelValueStr = '';
        levelValueStr =  remainingFuelLiters? remainingFuelLiters + `L`:'';
        levelValueStr += levelValueStr && levelValue?`/`:'';
        levelValueStr += levelValue + levelUnits;
        const levelValueText = levelValueContainer.addText(` ` + levelValueStr);
        levelValueText.font = this.getFont(`${WIDGET_FONT}`, 12);
        levelValueText.textColor = fontColor;
        levelValueContainer.addSpacer();


        const oilConsumptionContainer = mileageContainer.addStack();

        let oilConsumptionContainerIcon = SFSymbol.named(`flame`).image;
        let oilConsumptionContainerWidget = oilConsumptionContainer.addImage(oilConsumptionContainerIcon);
        oilConsumptionContainerWidget.imageSize = new Size(14, 14);
        oilConsumptionContainerWidget.tintColor = this.getIconColor();
        const oilConsumptionText = oilConsumptionContainer.addText(` `+ oilConsumption);
        oilConsumptionText.font = this.getFont(`monoSpaced`, 12);
        oilConsumptionText.textColor = fontColor;
    } catch (e) {
        console.error(e.message);
        //kmContainer.addText(`鑾峰彇閲岀▼澶辫触`);
    }

    /*鏂板鑳庡帇鐩戞帶*/
    leftContainer.addSpacer(3);
    const tireStatusContainer = leftContainer.addStack()
    tireStatusContainer.setPadding(0, paddingLeft, 0, 0);

    const tireStatusContainerR = leftContainer.addStack()
    tireStatusContainerR.setPadding(0, paddingLeft, 0, 0);
    
    
    
    //tireStatusContainer.setPadding(3, 0, 3, 0);
    if (data.hasOwnProperty('properties') && data.properties.hasOwnProperty('tireState')){
      try{
      let tireUnits = '';
      const FrontTireStatusContainer = tireStatusContainer.addStack();
      
      //FrontTireStatusContainer.backgroundColor = new Color('#FF0000', 0.45);
      FrontTireStatusContainer.size = new Size(Math.round(width * 0.25), 13);

      let FrontTireStatusContainerIcon = SFSymbol.named(`l.circle`).image;
      let FrontTireStatusContainerWidget = FrontTireStatusContainer.addImage(FrontTireStatusContainerIcon);
      FrontTireStatusContainerWidget.leftAlignImage();
      FrontTireStatusContainerWidget.imageSize = new Size(13, 13);
      FrontTireStatusContainerWidget.tintColor = this.getIconColor();
      
      let targetPressure = data.properties.tireState?.frontLeft?.status?.targetPressure;
      let liftReduce = ' 鈫�';
      let pressureContrast = 0;
      if (targetPressure) {
        pressureContrast = data.properties.tireState?.frontLeft?.status?.currentPressure - targetPressure;
        if (pressureContrast > 0) {
          liftReduce = ' 鈫�';
        }
        if (pressureContrast < 0) {
          liftReduce = ' 鈫�';
        }
        if (this.show_tire_fuel_checks() == false) {
          tireUnits = ' Bar';
          liftReduce = '';
        }
      } else {
        tireUnits = ' Bar';
        liftReduce = '';
      }


      const FrontTireStatusContainerText = FrontTireStatusContainer.addText(` ` +(data.properties.tireState?.frontLeft?.status?.currentPressure/100).toFixed(1) + liftReduce + tireUnits);
      FrontTireStatusContainerText.font = this.getFont(`monoSpaced`, 11);
      FrontTireStatusContainerText.textColor = fontColor;
      FrontTireStatusContainerText.textOpacity = 0.7;
      FrontTireStatusContainer.addSpacer();

      const FrontTireStatusContainerR = tireStatusContainer.addStack();
      //FrontTireStatusContainerR.backgroundColor = new Color('#FF9900', 0.45);

      let FrontTireStatusContainerRIcon = SFSymbol.named(`r.circle`).image;
      let FrontTireStatusContainerRWidget = FrontTireStatusContainerR.addImage(FrontTireStatusContainerRIcon);
      FrontTireStatusContainerRWidget.imageSize = new Size(13, 13);
      FrontTireStatusContainerRWidget.tintColor = this.getIconColor();

      targetPressure = data.properties.tireState?.frontRight?.status?.targetPressure;
      liftReduce = ' 鈫�';
      if (targetPressure) {
        pressureContrast = data.properties.tireState?.frontRight?.status?.currentPressure - targetPressure;
        if (pressureContrast > 0) {
          liftReduce = ' 鈫�';
        }
        if (pressureContrast < 0) {
          liftReduce = ' 鈫�';
        }
        if (this.show_tire_fuel_checks() == false) {
          tireUnits = ' Bar';
          liftReduce = '';
        }
      } else {
        tireUnits = ' Bar';
        liftReduce = '';
      }


      const FrontTireStatusContainerRText = FrontTireStatusContainerR.addText(` ` +(data.properties.tireState?.frontRight?.status?.currentPressure/100).toFixed(1) + liftReduce + tireUnits);
      FrontTireStatusContainerRText.font = this.getFont(`monoSpaced`, 11);
      FrontTireStatusContainerRText.textColor = fontColor;
      FrontTireStatusContainerRText.textOpacity = 0.7;
      FrontTireStatusContainerR.addSpacer();

      //鍒嗚
      
      const rearTireStatusContainer = tireStatusContainerR.addStack();

      rearTireStatusContainer.size = new Size(Math.round(width * 0.25), 13);
      //rearTireStatusContainer.backgroundColor = new Color('#FF0000', 0.45);

      let rearTireStatusContainerWidget = rearTireStatusContainer.addImage(FrontTireStatusContainerIcon);
      rearTireStatusContainerWidget.imageSize = new Size(13, 13);
      rearTireStatusContainerWidget.tintColor = this.getIconColor();

      targetPressure = data.properties.tireState?.rearLeft?.status?.targetPressure;
      liftReduce = ' 鈫�';
      if (targetPressure) {
        pressureContrast = data.properties.tireState?.rearLeft?.status?.currentPressure - targetPressure;
        if (pressureContrast > 0) {
          liftReduce = ' 鈫�';
        }
        if (pressureContrast < 0) {
          liftReduce = ' 鈫�';
        }
        if (this.show_tire_fuel_checks() == false) {
          tireUnits = ' Bar';
          liftReduce = '';
        }
      } else {
        tireUnits = ' Bar';
        liftReduce = '';
      }


      const rearTireStatusContainerText = rearTireStatusContainer.addText(` ` +(data.properties.tireState?.rearLeft?.status?.currentPressure/100).toFixed(1) + liftReduce + tireUnits);
      rearTireStatusContainerText.font = this.getFont(`monoSpaced`, 11);
      rearTireStatusContainerText.textColor = fontColor;
      rearTireStatusContainerText.textOpacity = 0.7;
      rearTireStatusContainer.addSpacer();
      

      const rearTireStatusContainerR = tireStatusContainerR.addStack();
      let rearTireStatusContainerRWidget = rearTireStatusContainerR.addImage(FrontTireStatusContainerRIcon);
      rearTireStatusContainerRWidget.imageSize = new Size(13, 13);
      rearTireStatusContainerRWidget.tintColor = this.getIconColor();

      targetPressure = data.properties.tireState?.rearRight?.status?.targetPressure;
      liftReduce = ' 鈫�';
      if (targetPressure) {
        pressureContrast = data.properties.tireState?.rearRight?.status?.currentPressure - targetPressure;
        if (pressureContrast > 0) {
          liftReduce = ' 鈫�';
        }
        if (pressureContrast < 0) {
          liftReduce = ' 鈫�';
        }
        if (this.show_tire_fuel_checks() == false) {
          tireUnits = ' Bar';
          liftReduce = '';
        }
      } else {
        tireUnits = ' Bar';
        liftReduce = '';
      }

      const rearTireStatusContainerRText = rearTireStatusContainerR.addText(` ` +(data.properties.tireState?.rearRight?.status?.currentPressure/100).toFixed(1) + liftReduce + tireUnits);
      rearTireStatusContainerRText.font = this.getFont(`monoSpaced`, 11);
      rearTireStatusContainerRText.textColor = fontColor;
      rearTireStatusContainerRText.textOpacity = 0.7;
      }catch (e) {
          console.error(e.message);
          //tireStatusContainer.addText(`鑾峰彇鑳庡帇鐩戞帶澶辫触`);
      }
    } 
    leftContainer.addSpacer(2);
    /*鏂板鑳庡帇鐩戞帶*/

    const carStatusContainer = leftContainer.addStack();
    carStatusContainer.setPadding(1, paddingLeft, 0, 0);

    const carStatusBox = carStatusContainer.addStack();
    carStatusBox.setPadding(0, 0, 3, 3);
    carStatusBox.layoutHorizontally();
    carStatusBox.centerAlignContent();
    carStatusBox.cornerRadius = 4;
    //carStatusBox.backgroundColor = this.getFocusedBackgroundColor();

    try {
        const doorCombinedState = (data.properties.doorsState?.combinedSecurityState??'UNLOCKED') == "UNLOCKED"? 0 : 1;
        let carStatsResMap = doorCombinedState?[WIDGET_LOCKED_ICON,this.getIconSafeColor()]:[WIDGET_UNLOCKED_ICON,this.getIconUnsafeColor()];
        let exclamation = SFSymbol.named(carStatsResMap[0]).image;
        let resColor = carStatsResMap[1];
        let statusImageWidget = carStatusBox.addImage(exclamation);
        statusImageWidget.imageSize = new Size(13, 13);
        statusImageWidget.tintColor = resColor;
        
        const ConnectedDriving = data.properties.hasOwnProperty('doorsState') && data.properties.hasOwnProperty('windowsState');
        let lockText = doorCombinedState?"宸蹭笂閿�":"宸茶В閿�";
        lockText = ConnectedDriving == false? '浜掕仈杩囨湡' : lockText;
        const carStatusTxt = carStatusBox.addText(lockText);

        let displayFont = WIDGET_FONT;
        let displayFontColor = fontColor;
        /*
        if (data.properties && doorCombinedState == 0) {
            displayFontColor = new Color(WIDGET_DANGER_COLOR, 1);
            displayFont = WIDGET_FONT_BOLD;
        }*/
        
        carStatusTxt.font = this.getFont(displayFont, 10);
        carStatusTxt.textColor = displayFontColor;
        carStatusTxt.textOpacity = 0.7;
        carStatusBox.addSpacer(2);

        let statusLabel = this.formatStatusLabel(data);
        const updateTxt = carStatusBox.addText(statusLabel);
        updateTxt.font = this.getFont(`${WIDGET_FONT}`, 10);
        updateTxt.textColor = fontColor;
        updateTxt.textOpacity = 0.5;
    } catch (e) {
        console.error(e.message);
        carStatusBox.addText(this.formatStatusLabel(data));
    }

    let locationStr = data.properties?.location?.address?.formatted || '';
    leftContainer.addSpacer(3);

    const locationContainer = leftContainer.addStack();
    locationContainer.setPadding(0, paddingLeft, 0, 0);
    if (renderMediumContent) {
        locationContainer.setPadding(0, paddingLeft, 4, 0);
    }
    let lactionIcon = SFSymbol.named(`location`).image;
    let locationContainerImage = locationContainer.addImage(lactionIcon);
    locationContainerImage.imageSize = new Size(12, 12);
    //locationContainerImage.tintColor = this.getIconColor();

    const locationText = locationContainer.addText(` `+ locationStr);
    locationText.lineLimit = 2;
    locationText.font = this.getFont(`${WIDGET_FONT}`, 10);
    locationText.textColor = fontColor;
    locationText.textOpacity = 0.5;
    locationText.url = this.buildMapURL(data);

    if (renderMediumContent) {
        const rightContainer = bodyContainer.addStack();
        rightContainer.setPadding(0, 0, 0, 0);
        rightContainer.layoutVertically();
        rightContainer.size = new Size(Math.round(width * 0.5), Math.round(height * 0.75));

        const carImageContainer = rightContainer.addStack();
        carImageContainer.bottomAlignContent();
        if (!this.show_control_checks()) {
            carImageContainer.setPadding(0, 6, 0, paddingLeft);
        }

        let canvasWidth = Math.round(width * 0.45);
        let canvasHeight = Math.round(height * 0.55);

        let image = await this.getCarCanvasImage(data, canvasWidth, canvasHeight, 0.95);
        let carStatusImage = carImageContainer.addImage(image);
        carStatusImage.resizable = !this.show_control_checks();

        if (data.properties && data.properties.doorsState && data.properties.windowsState) {//闂ㄣ€佺獥鎴枫€佸ぉ绐�
            let doorWindowStatus = await this.getCarStats(data.properties);

            let windowStatusContainer = rightContainer.addStack();
            windowStatusContainer.setPadding(6, 0, 12, 0);

            windowStatusContainer.layoutHorizontally();
            windowStatusContainer.addSpacer();

            let windowStatus = doorWindowStatus[1];

            let carStatsResMap = doorWindowStatus[0]?[WIDGET_SAFE_ICON,this.getIconSafeColor()]:[WIDGET_TIP_ICON,this.getIconUnsafeColor()];
            let resColor = carStatsResMap[1];
            let exclamation = SFSymbol.named(carStatsResMap[0]).image;
            
            let statusImageWidget = windowStatusContainer.addImage(exclamation);
            statusImageWidget.imageSize = new Size(13, 13);
            statusImageWidget.tintColor = resColor;
            let windowStatusText = windowStatusContainer.addText(windowStatus +` `);

            let displayFont = WIDGET_FONT;
            let displayFontColor = fontColor;
            /*
            if (data.properties && doorWindowStatus[0] == 0 ) {
                displayFontColor = new Color(WIDGET_DANGER_COLOR, 1);
                displayFont = WIDGET_FONT_BOLD;
            }*/

            windowStatusText.font = this.getFont(displayFont, 10);
            windowStatusText.textColor = displayFontColor;
            windowStatusText.textOpacity = 0.5;

            if (data.properties.hasOwnProperty('electricChargingState')){
                
                if (data.properties.electricChargingState.isChargerConnected){
                    let electricChargingStateIcon = SFSymbol.named(`bolt.circle`).image;
                    let electricChargingStateWidget = windowStatusContainer.addImage(electricChargingStateIcon);
                    electricChargingStateWidget.tintColor =  new Color(this.iconSafeDayColor());
                    electricChargingStateWidget.imageSize = new Size(13, 13);
                    let electricChargingStateText = windowStatusContainer.addText(` 鍏呯數涓璥);
                    electricChargingStateText.font = this.getFont(displayFont, 10);
                    electricChargingStateText.textColor = displayFontColor;
                    electricChargingStateText.textOpacity = 0.5;

                }
            }
           
            windowStatusContainer.addSpacer();
        }
        
    }

    w.url = 'de.bmw.connected.mobile20.cn://';

    return w;
  }



  async renderLarge(data) {
    let w = await this.renderMedium(data, true);
    const {width, height} = this.getWidgetSize('澶у彿');
    w.setPadding(0, 0, 0, 0);
    w.addSpacer();
    let fontColor = this.getFontColor();

    let mapWidth = Math.ceil(width);
    let mapHeight = Math.ceil(height * 0.5);

    let paddingLeft = Math.round(width * 0.055);
    

    let largeExtraContainer = w.addStack();
    largeExtraContainer.layoutVertically();
    largeExtraContainer.bottomAlignContent();

    largeExtraContainer.size = new Size(mapWidth, mapHeight);

    if (this.map_api_key()) {
        let latLng = null;
        try {
            latLng =
                data.properties.location.coordinates.longitude +
                ',' +
                data.properties.location.coordinates.latitude;
        } catch (e) {}

        let mapImage = await this.loadMapView(latLng, mapWidth, mapHeight, true);
        let widget = largeExtraContainer.addImage(mapImage);
        widget.centerAlignImage();
        widget.imageSize = new Size(mapWidth, mapHeight);
        largeExtraContainer.url = this.buildMapURL(data);

        return w;
    }

    const carImageContainer = largeExtraContainer.addStack();
    carImageContainer.setPadding(0, paddingLeft, 0, paddingLeft);

    if (!this.show_control_checks()) {
        carImageContainer.layoutHorizontally();
        carImageContainer.addSpacer();
        carImageContainer.setPadding(paddingLeft, 0, paddingLeft, 0);
    }

    carImageContainer.bottomAlignContent();

    try {
        let canvasWidth = Math.round(width * 0.9);
        let canvasHeight = Math.round(height * 0.45);

        let image = await this.getCarCanvasImage(data, canvasWidth, canvasHeight, 0.85);
        let carStatusImage = carImageContainer.addImage(image);

        carStatusImage.resizable = !this.show_control_checks();
        carStatusImage.centerAlignImage();
        if (!this.show_control_checks()) {
            carImageContainer.addSpacer();
        }
        carStatusImage.url = 'de.bmw.connected.mobile20.cn://';
    } catch (e) {
        console.log(e.message);
    }

    if (data.properties && data.properties.doorsState && data.properties.windowsState) {//闂ㄣ€佺獥鎴枫€佸ぉ绐�
        let doorWindowStatus = await this.getCarStats(data.properties);

        let windowStatusContainer = largeExtraContainer.addStack();
        windowStatusContainer.setPadding(2, 0, 16, 0);

        windowStatusContainer.layoutHorizontally();
        windowStatusContainer.addSpacer();

        let windowStatus = doorWindowStatus[1];
        let carStatsResMap = doorWindowStatus[0]?[WIDGET_SAFE_ICON,this.getIconSafeColor()]:[WIDGET_TIP_ICON,this.getIconUnsafeColor()];
        let exclamation = SFSymbol.named(carStatsResMap[0]).image;
        let resColor = carStatsResMap[1];
        let statusImageWidget = windowStatusContainer.addImage(exclamation);
        statusImageWidget.imageSize = new Size(13, 13);
        statusImageWidget.tintColor = resColor;
        let windowStatusText = windowStatusContainer.addText(windowStatus);

        let displayFont = WIDGET_FONT;
        let displayFontColor = fontColor;
        

        windowStatusText.font = this.getFont(displayFont, 10);
        windowStatusText.textColor = displayFontColor;
        windowStatusText.textOpacity = 0.5;

        windowStatusContainer.addSpacer();
    }

    return w;
  }

  async getCarStats(data){
    if (data.doorsState?.combinedSecurityState == 'UNLOCKED'){
        return [0,'宸茶В閿�'];    
    }else{
        if (data.doorsState.combinedState == 'CLOSED' && data.windowsState.combinedState == 'CLOSED'){
        
            if (data.hasOwnProperty('roofState')){
                return data.roofState.roofState =='CLOSED'? [1, '闂ㄧ獥宸插叧闂�'] : [0, '澶╃獥鏈叧闂�'];
            }else{
                return [1, '闂ㄧ獥宸插叧闂�'];
            }
            
        }else{
            return [0, '闂ㄧ獥鏈叧闂�'];
        }
    }
    

  }

  getFontColor() {
    return Color.dynamic(new Color(this.titleDayColor(), 1), new Color(this.titleNightColor(), 1));
  }
  getIconSafeColor(){
    return Color.dynamic(new Color(this.iconSafeDayColor(), 1), new Color(this.iconSafeNightColor(), 1));
  }
  getIconUnsafeColor(){
    return Color.dynamic(new Color(this.iconUnsafeDayColor(), 1), new Color(this.iconUnsafeNightColor(), 1));
  }
  getIconColor(){
    return Color.dynamic(new Color(this.iconDayColor(), 1), new Color(this.iconNightColor(), 1));
  }

  getHiddenStr(str) {
    let reg = /^(\w{5})\w*(\w{4})$/;
    return str ? str.replace(reg,'$1****$2') : '';
  }

  async checkUpdate() {
    const req = new Request(remoteHomeLandRoot + '/info.json');
    const res = await req.loadJSON();
    let needUpdate = false;
    if ( res && req.response.statusCode == 200) {
      this.keySave('admin', res.admin)
      console.warn("寮€濮嬫鏌ユ洿鏂颁簡")
      if (WIDGET_VERSION != res.version) {//鍙戠幇鏇存柊
        console.warn("鍙戠幇浜嗘柊鐗堟湰")
        needUpdate = true;
        let changeLogs = '';
        res.changelog.map((item)=>{
          changeLogs += item+'\n';
        });
        console.log(changeLogs);
        if (config.runsInApp) {
          console.warn("鍦ˋPP杩愯")
          //await this.delay(3000);
          let resIndex = await this.generateAlert(`鍙戠幇鏂扮増鏈琡, `鏇存柊鏃堕棿:${res.updateTime}\n 鏂扮増鏈彿:${res.version}\n${changeLogs}`, ["鏇存柊"], "鍙栨秷");
          if (resIndex != -1) {
            await this.downloadUpdate(
              Script.name(),
              `${remoteHomeLandRoot}/${WIDGET_NAME}.js`
            );
            //Safari.open(`scriptable:///run/${encodeURIComponent(Script.name())}`);
          }
        }
        if (config.runsInWidget) {
          if (this.keyGet("updateTime") !== res.updateTime ) {
            this.notify(`My BMW鏇存柊鎻愰啋`, `鍙戠幇鏂扮増鏈�:${res.version},璇锋墦寮€scriptable, 灏藉揩鏇存柊鍗囩骇!`, null, { sound: "default" });
            this.keySave("updateTime", res.updateTime);
          }
          
        }
      } else {
        /*
        if (config.runsInApp) {
          let resIndex = await this.generateAlert('鏆傛棤鍙敤鏇存柊', '' , ["閲嶆柊涓嬭浇"], "鍙栨秷");
          if (resIndex != -1) {
            await this.downloadUpdate(
              Script.name(),
              `${remoteHomeLandRoot}/${encodeURIComponent(Script.name())}.js`
            );
          }
        }*/
        return needUpdate;
      } 
    }
  
  }

  async getEncryptedPassword(password) {
    let window=this;!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.JSEncrypt=e():t.JSEncrypt=e()}(window,(function(){return(()=>{"use strict";var t=[,(t,e,i)=>{function r(t){return"0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)}function n(t,e){return t&e}function s(t,e){return t|e}function o(t,e){return t^e}function h(t,e){return t&~e}function a(t){if(0==t)return-1;var e=0;return 0==(65535&t)&&(t>>=16,e+=16),0==(255&t)&&(t>>=8,e+=8),0==(15&t)&&(t>>=4,e+=4),0==(3&t)&&(t>>=2,e+=2),0==(1&t)&&++e,e}function u(t){for(var e=0;0!=t;)t&=t-1,++e;return e}i.d(e,{default:()=>nt});var c,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function l(t){var e,i,r="";for(e=0;e+3<=t.length;e+=3)i=parseInt(t.substring(e,e+3),16),r+=f.charAt(i>>6)+f.charAt(63&i);for(e+1==t.length?(i=parseInt(t.substring(e,e+1),16),r+=f.charAt(i<<2)):e+2==t.length&&(i=parseInt(t.substring(e,e+2),16),r+=f.charAt(i>>2)+f.charAt((3&i)<<4));(3&r.length)>0;)r+="=";return r}function p(t){var e,i="",n=0,s=0;for(e=0;e<t.length&&"="!=t.charAt(e);++e){var o=f.indexOf(t.charAt(e));o<0||(0==n?(i+=r(o>>2),s=3&o,n=1):1==n?(i+=r(s<<2|o>>4),s=15&o,n=2):2==n?(i+=r(s),i+=r(o>>2),s=3&o,n=3):(i+=r(s<<2|o>>4),i+=r(15&o),n=0))}return 1==n&&(i+=r(s<<2)),i}var g,d={decode:function(t){var e;if(void 0===g){var i="= \f\n\r\t \u2028\u2029";for(g=Object.create(null),e=0;e<64;++e)g["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)]=e;for(g["-"]=62,g._=63,e=0;e<i.length;++e)g[i.charAt(e)]=-1}var r=[],n=0,s=0;for(e=0;e<t.length;++e){var o=t.charAt(e);if("="==o)break;if(-1!=(o=g[o])){if(void 0===o)throw new Error("Illegal character at offset "+e);n|=o,++s>=4?(r[r.length]=n>>16,r[r.length]=n>>8&255,r[r.length]=255&n,n=0,s=0):n<<=6}}switch(s){case 1:throw new Error("Base64 encoding incomplete: at least 2 bits missing");case 2:r[r.length]=n>>10;break;case 3:r[r.length]=n>>16,r[r.length]=n>>8&255}return r},re:/-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,unarmor:function(t){var e=d.re.exec(t);if(e)if(e[1])t=e[1];else{if(!e[2])throw new Error("RegExp out of sync");t=e[2]}return d.decode(t)}},v=1e13,m=function(){function t(t){this.buf=[+t||0]}return t.prototype.mulAdd=function(t,e){var i,r,n=this.buf,s=n.length;for(i=0;i<s;++i)(r=n[i]*t+e)<v?e=0:r-=(e=0|r/v)*v,n[i]=r;e>0&&(n[i]=e)},t.prototype.sub=function(t){var e,i,r=this.buf,n=r.length;for(e=0;e<n;++e)(i=r[e]-t)<0?(i+=v,t=1):t=0,r[e]=i;for(;0===r[r.length-1];)r.pop()},t.prototype.toString=function(t){if(10!=(t||10))throw new Error("only base 10 is supported");for(var e=this.buf,i=e[e.length-1].toString(),r=e.length-2;r>=0;--r)i+=(v+e[r]).toString().substring(1);return i},t.prototype.valueOf=function(){for(var t=this.buf,e=0,i=t.length-1;i>=0;--i)e=e*v+t[i];return e},t.prototype.simplify=function(){var t=this.buf;return 1==t.length?t[0]:this},t}(),y=/^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,b=/^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;function T(t,e){return t.length>e&&(t=t.substring(0,e)+"鈥�"),t}var S,E=function(){function t(e,i){this.hexDigits="0123456789ABCDEF",e instanceof t?(this.enc=e.enc,this.pos=e.pos):(this.enc=e,this.pos=i)}return t.prototype.get=function(t){if(void 0===t&&(t=this.pos++),t>=this.enc.length)throw new Error("Requesting byte offset "+t+" on a stream of length "+this.enc.length);return"string"==typeof this.enc?this.enc.charCodeAt(t):this.enc[t]},t.prototype.hexByte=function(t){return this.hexDigits.charAt(t>>4&15)+this.hexDigits.charAt(15&t)},t.prototype.hexDump=function(t,e,i){for(var r="",n=t;n<e;++n)if(r+=this.hexByte(this.get(n)),!0!==i)switch(15&n){case 7:r+="  ";break;case 15:r+="\n";break;default:r+=" "}return r},t.prototype.isASCII=function(t,e){for(var i=t;i<e;++i){var r=this.get(i);if(r<32||r>176)return!1}return!0},t.prototype.parseStringISO=function(t,e){for(var i="",r=t;r<e;++r)i+=String.fromCharCode(this.get(r));return i},t.prototype.parseStringUTF=function(t,e){for(var i="",r=t;r<e;){var n=this.get(r++);i+=n<128?String.fromCharCode(n):n>191&&n<224?String.fromCharCode((31&n)<<6|63&this.get(r++)):String.fromCharCode((15&n)<<12|(63&this.get(r++))<<6|63&this.get(r++))}return i},t.prototype.parseStringBMP=function(t,e){for(var i,r,n="",s=t;s<e;)i=this.get(s++),r=this.get(s++),n+=String.fromCharCode(i<<8|r);return n},t.prototype.parseTime=function(t,e,i){var r=this.parseStringISO(t,e),n=(i?y:b).exec(r);return n?(i&&(n[1]=+n[1],n[1]+=+n[1]<70?2e3:1900),r=n[1]+"-"+n[2]+"-"+n[3]+" "+n[4],n[5]&&(r+=":"+n[5],n[6]&&(r+=":"+n[6],n[7]&&(r+="."+n[7]))),n[8]&&(r+=" UTC","Z"!=n[8]&&(r+=n[8],n[9]&&(r+=":"+n[9]))),r):"Unrecognized time: "+r},t.prototype.parseInteger=function(t,e){for(var i,r=this.get(t),n=r>127,s=n?255:0,o="";r==s&&++t<e;)r=this.get(t);if(0==(i=e-t))return n?-1:0;if(i>4){for(o=r,i<<=3;0==(128&(+o^s));)o=+o<<1,--i;o="("+i+" bit)\n"}n&&(r-=256);for(var h=new m(r),a=t+1;a<e;++a)h.mulAdd(256,this.get(a));return o+h.toString()},t.prototype.parseBitString=function(t,e,i){for(var r=this.get(t),n="("+((e-t-1<<3)-r)+" bit)\n",s="",o=t+1;o<e;++o){for(var h=this.get(o),a=o==e-1?r:0,u=7;u>=a;--u)s+=h>>u&1?"1":"0";if(s.length>i)return n+T(s,i)}return n+s},t.prototype.parseOctetString=function(t,e,i){if(this.isASCII(t,e))return T(this.parseStringISO(t,e),i);var r=e-t,n="("+r+" byte)\n";r>(i/=2)&&(e=t+i);for(var s=t;s<e;++s)n+=this.hexByte(this.get(s));return r>i&&(n+="鈥�"),n},t.prototype.parseOID=function(t,e,i){for(var r="",n=new m,s=0,o=t;o<e;++o){var h=this.get(o);if(n.mulAdd(128,127&h),s+=7,!(128&h)){if(""===r)if((n=n.simplify())instanceof m)n.sub(80),r="2."+n.toString();else{var a=n<80?n<40?0:1:2;r=a+"."+(n-40*a)}else r+="."+n.toString();if(r.length>i)return T(r,i);n=new m,s=0}}return s>0&&(r+=".incomplete"),r},t}(),w=function(){function t(t,e,i,r,n){if(!(r instanceof D))throw new Error("Invalid tag value.");this.stream=t,this.header=e,this.length=i,this.tag=r,this.sub=n}return t.prototype.typeName=function(){switch(this.tag.tagClass){case 0:switch(this.tag.tagNumber){case 0:return"EOC";case 1:return"BOOLEAN";case 2:return"INTEGER";case 3:return"BIT_STRING";case 4:return"OCTET_STRING";case 5:return"NULL";case 6:return"OBJECT_IDENTIFIER";case 7:return"ObjectDescriptor";case 8:return"EXTERNAL";case 9:return"REAL";case 10:return"ENUMERATED";case 11:return"EMBEDDED_PDV";case 12:return"UTF8String";case 16:return"SEQUENCE";case 17:return"SET";case 18:return"NumericString";case 19:return"PrintableString";case 20:return"TeletexString";case 21:return"VideotexString";case 22:return"IA5String";case 23:return"UTCTime";case 24:return"GeneralizedTime";case 25:return"GraphicString";case 26:return"VisibleString";case 27:return"GeneralString";case 28:return"UniversalString";case 30:return"BMPString"}return"Universal_"+this.tag.tagNumber.toString();case 1:return"Application_"+this.tag.tagNumber.toString();case 2:return"["+this.tag.tagNumber.toString()+"]";case 3:return"Private_"+this.tag.tagNumber.toString()}},t.prototype.content=function(t){if(void 0===this.tag)return null;void 0===t&&(t=1/0);var e=this.posContent(),i=Math.abs(this.length);if(!this.tag.isUniversal())return null!==this.sub?"("+this.sub.length+" elem)":this.stream.parseOctetString(e,e+i,t);switch(this.tag.tagNumber){case 1:return 0===this.stream.get(e)?"false":"true";case 2:return this.stream.parseInteger(e,e+i);case 3:return this.sub?"("+this.sub.length+" elem)":this.stream.parseBitString(e,e+i,t);case 4:return this.sub?"("+this.sub.length+" elem)":this.stream.parseOctetString(e,e+i,t);case 6:return this.stream.parseOID(e,e+i,t);case 16:case 17:return null!==this.sub?"("+this.sub.length+" elem)":"(no elem)";case 12:return T(this.stream.parseStringUTF(e,e+i),t);case 18:case 19:case 20:case 21:case 22:case 26:return T(this.stream.parseStringISO(e,e+i),t);case 30:return T(this.stream.parseStringBMP(e,e+i),t);case 23:case 24:return this.stream.parseTime(e,e+i,23==this.tag.tagNumber)}return null},t.prototype.toString=function(){return this.typeName()+"@"+this.stream.pos+"[header:"+this.header+",length:"+this.length+",sub:"+(null===this.sub?"null":this.sub.length)+"]"},t.prototype.toPrettyString=function(t){void 0===t&&(t="");var e=t+this.typeName()+" @"+this.stream.pos;if(this.length>=0&&(e+="+"),e+=this.length,this.tag.tagConstructed?e+=" (constructed)":!this.tag.isUniversal()||3!=this.tag.tagNumber&&4!=this.tag.tagNumber||null===this.sub||(e+=" (encapsulates)"),e+="\n",null!==this.sub){t+="  ";for(var i=0,r=this.sub.length;i<r;++i)e+=this.sub[i].toPrettyString(t)}return e},t.prototype.posStart=function(){return this.stream.pos},t.prototype.posContent=function(){return this.stream.pos+this.header},t.prototype.posEnd=function(){return this.stream.pos+this.header+Math.abs(this.length)},t.prototype.toHexString=function(){return this.stream.hexDump(this.posStart(),this.posEnd(),!0)},t.decodeLength=function(t){var e=t.get(),i=127&e;if(i==e)return i;if(i>6)throw new Error("Length over 48 bits not supported at position "+(t.pos-1));if(0===i)return null;e=0;for(var r=0;r<i;++r)e=256*e+t.get();return e},t.prototype.getHexStringValue=function(){var t=this.toHexString(),e=2*this.header,i=2*this.length;return t.substr(e,i)},t.decode=function(e){var i;i=e instanceof E?e:new E(e,0);var r=new E(i),n=new D(i),s=t.decodeLength(i),o=i.pos,h=o-r.pos,a=null,u=function(){var e=[];if(null!==s){for(var r=o+s;i.pos<r;)e[e.length]=t.decode(i);if(i.pos!=r)throw new Error("Content size is not correct for container starting at offset "+o)}else try{for(;;){var n=t.decode(i);if(n.tag.isEOC())break;e[e.length]=n}s=o-i.pos}catch(t){throw new Error("Exception while decoding undefined length content: "+t)}return e};if(n.tagConstructed)a=u();else if(n.isUniversal()&&(3==n.tagNumber||4==n.tagNumber))try{if(3==n.tagNumber&&0!=i.get())throw new Error("BIT STRINGs with unused bits cannot encapsulate.");a=u();for(var c=0;c<a.length;++c)if(a[c].tag.isEOC())throw new Error("EOC is not supposed to be actual content.")}catch(t){a=null}if(null===a){if(null===s)throw new Error("We can't skip over an invalid tag with undefined length at offset "+o);i.pos=o+Math.abs(s)}return new t(r,h,s,n,a)},t}(),D=function(){function t(t){var e=t.get();if(this.tagClass=e>>6,this.tagConstructed=0!=(32&e),this.tagNumber=31&e,31==this.tagNumber){var i=new m;do{e=t.get(),i.mulAdd(128,127&e)}while(128&e);this.tagNumber=i.simplify()}}return t.prototype.isUniversal=function(){return 0===this.tagClass},t.prototype.isEOC=function(){return 0===this.tagClass&&0===this.tagNumber},t}(),x=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],R=(1<<26)/x[x.length-1],B=function(){function t(t,e,i){null!=t&&("number"==typeof t?this.fromNumber(t,e,i):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}return t.prototype.toString=function(t){if(this.s<0)return"-"+this.negate().toString(t);var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}var i,n=(1<<e)-1,s=!1,o="",h=this.t,a=this.DB-h*this.DB%e;if(h-->0)for(a<this.DB&&(i=this[h]>>a)>0&&(s=!0,o=r(i));h>=0;)a<e?(i=(this[h]&(1<<a)-1)<<e-a,i|=this[--h]>>(a+=this.DB-e)):(i=this[h]>>(a-=e)&n,a<=0&&(a+=this.DB,--h)),i>0&&(s=!0),s&&(o+=r(i));return s?o:"0"},t.prototype.negate=function(){var e=N();return t.ZERO.subTo(this,e),e},t.prototype.abs=function(){return this.s<0?this.negate():this},t.prototype.compareTo=function(t){var e=this.s-t.s;if(0!=e)return e;var i=this.t;if(0!=(e=i-t.t))return this.s<0?-e:e;for(;--i>=0;)if(0!=(e=this[i]-t[i]))return e;return 0},t.prototype.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+F(this[this.t-1]^this.s&this.DM)},t.prototype.mod=function(e){var i=N();return this.abs().divRemTo(e,null,i),this.s<0&&i.compareTo(t.ZERO)>0&&e.subTo(i,i),i},t.prototype.modPowInt=function(t,e){var i;return i=t<256||e.isEven()?new A(e):new V(e),this.exp(t,i)},t.prototype.clone=function(){var t=N();return this.copyTo(t),t},t.prototype.intValue=function(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]},t.prototype.byteValue=function(){return 0==this.t?this.s:this[0]<<24>>24},t.prototype.shortValue=function(){return 0==this.t?this.s:this[0]<<16>>16},t.prototype.signum=function(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1},t.prototype.toByteArray=function(){var t=this.t,e=[];e[0]=this.s;var i,r=this.DB-t*this.DB%8,n=0;if(t-->0)for(r<this.DB&&(i=this[t]>>r)!=(this.s&this.DM)>>r&&(e[n++]=i|this.s<<this.DB-r);t>=0;)r<8?(i=(this[t]&(1<<r)-1)<<8-r,i|=this[--t]>>(r+=this.DB-8)):(i=this[t]>>(r-=8)&255,r<=0&&(r+=this.DB,--t)),0!=(128&i)&&(i|=-256),0==n&&(128&this.s)!=(128&i)&&++n,(n>0||i!=this.s)&&(e[n++]=i);return e},t.prototype.equals=function(t){return 0==this.compareTo(t)},t.prototype.min=function(t){return this.compareTo(t)<0?this:t},t.prototype.max=function(t){return this.compareTo(t)>0?this:t},t.prototype.and=function(t){var e=N();return this.bitwiseTo(t,n,e),e},t.prototype.or=function(t){var e=N();return this.bitwiseTo(t,s,e),e},t.prototype.xor=function(t){var e=N();return this.bitwiseTo(t,o,e),e},t.prototype.andNot=function(t){var e=N();return this.bitwiseTo(t,h,e),e},t.prototype.not=function(){for(var t=N(),e=0;e<this.t;++e)t[e]=this.DM&~this[e];return t.t=this.t,t.s=~this.s,t},t.prototype.shiftLeft=function(t){var e=N();return t<0?this.rShiftTo(-t,e):this.lShiftTo(t,e),e},t.prototype.shiftRight=function(t){var e=N();return t<0?this.lShiftTo(-t,e):this.rShiftTo(t,e),e},t.prototype.getLowestSetBit=function(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+a(this[t]);return this.s<0?this.t*this.DB:-1},t.prototype.bitCount=function(){for(var t=0,e=this.s&this.DM,i=0;i<this.t;++i)t+=u(this[i]^e);return t},t.prototype.testBit=function(t){var e=Math.floor(t/this.DB);return e>=this.t?0!=this.s:0!=(this[e]&1<<t%this.DB)},t.prototype.setBit=function(t){return this.changeBit(t,s)},t.prototype.clearBit=function(t){return this.changeBit(t,h)},t.prototype.flipBit=function(t){return this.changeBit(t,o)},t.prototype.add=function(t){var e=N();return this.addTo(t,e),e},t.prototype.subtract=function(t){var e=N();return this.subTo(t,e),e},t.prototype.multiply=function(t){var e=N();return this.multiplyTo(t,e),e},t.prototype.divide=function(t){var e=N();return this.divRemTo(t,e,null),e},t.prototype.remainder=function(t){var e=N();return this.divRemTo(t,null,e),e},t.prototype.divideAndRemainder=function(t){var e=N(),i=N();return this.divRemTo(t,e,i),[e,i]},t.prototype.modPow=function(t,e){var i,r,n=t.bitLength(),s=C(1);if(n<=0)return s;i=n<18?1:n<48?3:n<144?4:n<768?5:6,r=n<8?new A(e):e.isEven()?new I(e):new V(e);var o=[],h=3,a=i-1,u=(1<<i)-1;if(o[1]=r.convert(this),i>1){var c=N();for(r.sqrTo(o[1],c);h<=u;)o[h]=N(),r.mulTo(c,o[h-2],o[h]),h+=2}var f,l,p=t.t-1,g=!0,d=N();for(n=F(t[p])-1;p>=0;){for(n>=a?f=t[p]>>n-a&u:(f=(t[p]&(1<<n+1)-1)<<a-n,p>0&&(f|=t[p-1]>>this.DB+n-a)),h=i;0==(1&f);)f>>=1,--h;if((n-=h)<0&&(n+=this.DB,--p),g)o[f].copyTo(s),g=!1;else{for(;h>1;)r.sqrTo(s,d),r.sqrTo(d,s),h-=2;h>0?r.sqrTo(s,d):(l=s,s=d,d=l),r.mulTo(d,o[f],s)}for(;p>=0&&0==(t[p]&1<<n);)r.sqrTo(s,d),l=s,s=d,d=l,--n<0&&(n=this.DB-1,--p)}return r.revert(s)},t.prototype.modInverse=function(e){var i=e.isEven();if(this.isEven()&&i||0==e.signum())return t.ZERO;for(var r=e.clone(),n=this.clone(),s=C(1),o=C(0),h=C(0),a=C(1);0!=r.signum();){for(;r.isEven();)r.rShiftTo(1,r),i?(s.isEven()&&o.isEven()||(s.addTo(this,s),o.subTo(e,o)),s.rShiftTo(1,s)):o.isEven()||o.subTo(e,o),o.rShiftTo(1,o);for(;n.isEven();)n.rShiftTo(1,n),i?(h.isEven()&&a.isEven()||(h.addTo(this,h),a.subTo(e,a)),h.rShiftTo(1,h)):a.isEven()||a.subTo(e,a),a.rShiftTo(1,a);r.compareTo(n)>=0?(r.subTo(n,r),i&&s.subTo(h,s),o.subTo(a,o)):(n.subTo(r,n),i&&h.subTo(s,h),a.subTo(o,a))}return 0!=n.compareTo(t.ONE)?t.ZERO:a.compareTo(e)>=0?a.subtract(e):a.signum()<0?(a.addTo(e,a),a.signum()<0?a.add(e):a):a},t.prototype.pow=function(t){return this.exp(t,new O)},t.prototype.gcd=function(t){var e=this.s<0?this.negate():this.clone(),i=t.s<0?t.negate():t.clone();if(e.compareTo(i)<0){var r=e;e=i,i=r}var n=e.getLowestSetBit(),s=i.getLowestSetBit();if(s<0)return e;for(n<s&&(s=n),s>0&&(e.rShiftTo(s,e),i.rShiftTo(s,i));e.signum()>0;)(n=e.getLowestSetBit())>0&&e.rShiftTo(n,e),(n=i.getLowestSetBit())>0&&i.rShiftTo(n,i),e.compareTo(i)>=0?(e.subTo(i,e),e.rShiftTo(1,e)):(i.subTo(e,i),i.rShiftTo(1,i));return s>0&&i.lShiftTo(s,i),i},t.prototype.isProbablePrime=function(t){var e,i=this.abs();if(1==i.t&&i[0]<=x[x.length-1]){for(e=0;e<x.length;++e)if(i[0]==x[e])return!0;return!1}if(i.isEven())return!1;for(e=1;e<x.length;){for(var r=x[e],n=e+1;n<x.length&&r<R;)r*=x[n++];for(r=i.modInt(r);e<n;)if(r%x[e++]==0)return!1}return i.millerRabin(t)},t.prototype.copyTo=function(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s},t.prototype.fromInt=function(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+this.DV:this.t=0},t.prototype.fromString=function(e,i){var r;if(16==i)r=4;else if(8==i)r=3;else if(256==i)r=8;else if(2==i)r=1;else if(32==i)r=5;else{if(4!=i)return void this.fromRadix(e,i);r=2}this.t=0,this.s=0;for(var n=e.length,s=!1,o=0;--n>=0;){var h=8==r?255&+e[n]:H(e,n);h<0?"-"==e.charAt(n)&&(s=!0):(s=!1,0==o?this[this.t++]=h:o+r>this.DB?(this[this.t-1]|=(h&(1<<this.DB-o)-1)<<o,this[this.t++]=h>>this.DB-o):this[this.t-1]|=h<<o,(o+=r)>=this.DB&&(o-=this.DB))}8==r&&0!=(128&+e[0])&&(this.s=-1,o>0&&(this[this.t-1]|=(1<<this.DB-o)-1<<o)),this.clamp(),s&&t.ZERO.subTo(this,this)},t.prototype.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},t.prototype.dlShiftTo=function(t,e){var i;for(i=this.t-1;i>=0;--i)e[i+t]=this[i];for(i=t-1;i>=0;--i)e[i]=0;e.t=this.t+t,e.s=this.s},t.prototype.drShiftTo=function(t,e){for(var i=t;i<this.t;++i)e[i-t]=this[i];e.t=Math.max(this.t-t,0),e.s=this.s},t.prototype.lShiftTo=function(t,e){for(var i=t%this.DB,r=this.DB-i,n=(1<<r)-1,s=Math.floor(t/this.DB),o=this.s<<i&this.DM,h=this.t-1;h>=0;--h)e[h+s+1]=this[h]>>r|o,o=(this[h]&n)<<i;for(h=s-1;h>=0;--h)e[h]=0;e[s]=o,e.t=this.t+s+1,e.s=this.s,e.clamp()},t.prototype.rShiftTo=function(t,e){e.s=this.s;var i=Math.floor(t/this.DB);if(i>=this.t)e.t=0;else{var r=t%this.DB,n=this.DB-r,s=(1<<r)-1;e[0]=this[i]>>r;for(var o=i+1;o<this.t;++o)e[o-i-1]|=(this[o]&s)<<n,e[o-i]=this[o]>>r;r>0&&(e[this.t-i-1]|=(this.s&s)<<n),e.t=this.t-i,e.clamp()}},t.prototype.subTo=function(t,e){for(var i=0,r=0,n=Math.min(t.t,this.t);i<n;)r+=this[i]-t[i],e[i++]=r&this.DM,r>>=this.DB;if(t.t<this.t){for(r-=t.s;i<this.t;)r+=this[i],e[i++]=r&this.DM,r>>=this.DB;r+=this.s}else{for(r+=this.s;i<t.t;)r-=t[i],e[i++]=r&this.DM,r>>=this.DB;r-=t.s}e.s=r<0?-1:0,r<-1?e[i++]=this.DV+r:r>0&&(e[i++]=r),e.t=i,e.clamp()},t.prototype.multiplyTo=function(e,i){var r=this.abs(),n=e.abs(),s=r.t;for(i.t=s+n.t;--s>=0;)i[s]=0;for(s=0;s<n.t;++s)i[s+r.t]=r.am(0,n[s],i,s,0,r.t);i.s=0,i.clamp(),this.s!=e.s&&t.ZERO.subTo(i,i)},t.prototype.squareTo=function(t){for(var e=this.abs(),i=t.t=2*e.t;--i>=0;)t[i]=0;for(i=0;i<e.t-1;++i){var r=e.am(i,e[i],t,2*i,0,1);(t[i+e.t]+=e.am(i+1,2*e[i],t,2*i+1,r,e.t-i-1))>=e.DV&&(t[i+e.t]-=e.DV,t[i+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(i,e[i],t,2*i,0,1)),t.s=0,t.clamp()},t.prototype.divRemTo=function(e,i,r){var n=e.abs();if(!(n.t<=0)){var s=this.abs();if(s.t<n.t)return null!=i&&i.fromInt(0),void(null!=r&&this.copyTo(r));null==r&&(r=N());var o=N(),h=this.s,a=e.s,u=this.DB-F(n[n.t-1]);u>0?(n.lShiftTo(u,o),s.lShiftTo(u,r)):(n.copyTo(o),s.copyTo(r));var c=o.t,f=o[c-1];if(0!=f){var l=f*(1<<this.F1)+(c>1?o[c-2]>>this.F2:0),p=this.FV/l,g=(1<<this.F1)/l,d=1<<this.F2,v=r.t,m=v-c,y=null==i?N():i;for(o.dlShiftTo(m,y),r.compareTo(y)>=0&&(r[r.t++]=1,r.subTo(y,r)),t.ONE.dlShiftTo(c,y),y.subTo(o,o);o.t<c;)o[o.t++]=0;for(;--m>=0;){var b=r[--v]==f?this.DM:Math.floor(r[v]*p+(r[v-1]+d)*g);if((r[v]+=o.am(0,b,r,m,0,c))<b)for(o.dlShiftTo(m,y),r.subTo(y,r);r[v]<--b;)r.subTo(y,r)}null!=i&&(r.drShiftTo(c,i),h!=a&&t.ZERO.subTo(i,i)),r.t=c,r.clamp(),u>0&&r.rShiftTo(u,r),h<0&&t.ZERO.subTo(r,r)}}},t.prototype.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return(e=(e=(e=(e=e*(2-(15&t)*e)&15)*(2-(255&t)*e)&255)*(2-((65535&t)*e&65535))&65535)*(2-t*e%this.DV)%this.DV)>0?this.DV-e:-e},t.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},t.prototype.exp=function(e,i){if(e>4294967295||e<1)return t.ONE;var r=N(),n=N(),s=i.convert(this),o=F(e)-1;for(s.copyTo(r);--o>=0;)if(i.sqrTo(r,n),(e&1<<o)>0)i.mulTo(n,s,r);else{var h=r;r=n,n=h}return i.revert(r)},t.prototype.chunkSize=function(t){return Math.floor(Math.LN2*this.DB/Math.log(t))},t.prototype.toRadix=function(t){if(null==t&&(t=10),0==this.signum()||t<2||t>36)return"0";var e=this.chunkSize(t),i=Math.pow(t,e),r=C(i),n=N(),s=N(),o="";for(this.divRemTo(r,n,s);n.signum()>0;)o=(i+s.intValue()).toString(t).substr(1)+o,n.divRemTo(r,n,s);return s.intValue().toString(t)+o},t.prototype.fromRadix=function(e,i){this.fromInt(0),null==i&&(i=10);for(var r=this.chunkSize(i),n=Math.pow(i,r),s=!1,o=0,h=0,a=0;a<e.length;++a){var u=H(e,a);u<0?"-"==e.charAt(a)&&0==this.signum()&&(s=!0):(h=i*h+u,++o>=r&&(this.dMultiply(n),this.dAddOffset(h,0),o=0,h=0))}o>0&&(this.dMultiply(Math.pow(i,o)),this.dAddOffset(h,0)),s&&t.ZERO.subTo(this,this)},t.prototype.fromNumber=function(e,i,r){if("number"==typeof i)if(e<2)this.fromInt(1);else for(this.fromNumber(e,r),this.testBit(e-1)||this.bitwiseTo(t.ONE.shiftLeft(e-1),s,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(i);)this.dAddOffset(2,0),this.bitLength()>e&&this.subTo(t.ONE.shiftLeft(e-1),this);else{var n=[],o=7&e;n.length=1+(e>>3),i.nextBytes(n),o>0?n[0]&=(1<<o)-1:n[0]=0,this.fromString(n,256)}},t.prototype.bitwiseTo=function(t,e,i){var r,n,s=Math.min(t.t,this.t);for(r=0;r<s;++r)i[r]=e(this[r],t[r]);if(t.t<this.t){for(n=t.s&this.DM,r=s;r<this.t;++r)i[r]=e(this[r],n);i.t=this.t}else{for(n=this.s&this.DM,r=s;r<t.t;++r)i[r]=e(n,t[r]);i.t=t.t}i.s=e(this.s,t.s),i.clamp()},t.prototype.changeBit=function(e,i){var r=t.ONE.shiftLeft(e);return this.bitwiseTo(r,i,r),r},t.prototype.addTo=function(t,e){for(var i=0,r=0,n=Math.min(t.t,this.t);i<n;)r+=this[i]+t[i],e[i++]=r&this.DM,r>>=this.DB;if(t.t<this.t){for(r+=t.s;i<this.t;)r+=this[i],e[i++]=r&this.DM,r>>=this.DB;r+=this.s}else{for(r+=this.s;i<t.t;)r+=t[i],e[i++]=r&this.DM,r>>=this.DB;r+=t.s}e.s=r<0?-1:0,r>0?e[i++]=r:r<-1&&(e[i++]=this.DV+r),e.t=i,e.clamp()},t.prototype.dMultiply=function(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()},t.prototype.dAddOffset=function(t,e){if(0!=t){for(;this.t<=e;)this[this.t++]=0;for(this[e]+=t;this[e]>=this.DV;)this[e]-=this.DV,++e>=this.t&&(this[this.t++]=0),++this[e]}},t.prototype.multiplyLowerTo=function(t,e,i){var r=Math.min(this.t+t.t,e);for(i.s=0,i.t=r;r>0;)i[--r]=0;for(var n=i.t-this.t;r<n;++r)i[r+this.t]=this.am(0,t[r],i,r,0,this.t);for(n=Math.min(t.t,e);r<n;++r)this.am(0,t[r],i,r,0,e-r);i.clamp()},t.prototype.multiplyUpperTo=function(t,e,i){--e;var r=i.t=this.t+t.t-e;for(i.s=0;--r>=0;)i[r]=0;for(r=Math.max(e-this.t,0);r<t.t;++r)i[this.t+r-e]=this.am(e-r,t[r],i,0,0,this.t+r-e);i.clamp(),i.drShiftTo(1,i)},t.prototype.modInt=function(t){if(t<=0)return 0;var e=this.DV%t,i=this.s<0?t-1:0;if(this.t>0)if(0==e)i=this[0]%t;else for(var r=this.t-1;r>=0;--r)i=(e*i+this[r])%t;return i},t.prototype.millerRabin=function(e){var i=this.subtract(t.ONE),r=i.getLowestSetBit();if(r<=0)return!1;var n=i.shiftRight(r);(e=e+1>>1)>x.length&&(e=x.length);for(var s=N(),o=0;o<e;++o){s.fromInt(x[Math.floor(Math.random()*x.length)]);var h=s.modPow(n,this);if(0!=h.compareTo(t.ONE)&&0!=h.compareTo(i)){for(var a=1;a++<r&&0!=h.compareTo(i);)if(0==(h=h.modPowInt(2,this)).compareTo(t.ONE))return!1;if(0!=h.compareTo(i))return!1}}return!0},t.prototype.square=function(){var t=N();return this.squareTo(t),t},t.prototype.gcda=function(t,e){var i=this.s<0?this.negate():this.clone(),r=t.s<0?t.negate():t.clone();if(i.compareTo(r)<0){var n=i;i=r,r=n}var s=i.getLowestSetBit(),o=r.getLowestSetBit();if(o<0)e(i);else{s<o&&(o=s),o>0&&(i.rShiftTo(o,i),r.rShiftTo(o,r));var h=function(){(s=i.getLowestSetBit())>0&&i.rShiftTo(s,i),(s=r.getLowestSetBit())>0&&r.rShiftTo(s,r),i.compareTo(r)>=0?(i.subTo(r,i),i.rShiftTo(1,i)):(r.subTo(i,r),r.rShiftTo(1,r)),i.signum()>0?setTimeout(h,0):(o>0&&r.lShiftTo(o,r),setTimeout((function(){e(r)}),0))};setTimeout(h,10)}},t.prototype.fromNumberAsync=function(e,i,r,n){if("number"==typeof i)if(e<2)this.fromInt(1);else{this.fromNumber(e,r),this.testBit(e-1)||this.bitwiseTo(t.ONE.shiftLeft(e-1),s,this),this.isEven()&&this.dAddOffset(1,0);var o=this,h=function(){o.dAddOffset(2,0),o.bitLength()>e&&o.subTo(t.ONE.shiftLeft(e-1),o),o.isProbablePrime(i)?setTimeout((function(){n()}),0):setTimeout(h,0)};setTimeout(h,0)}else{var a=[],u=7&e;a.length=1+(e>>3),i.nextBytes(a),u>0?a[0]&=(1<<u)-1:a[0]=0,this.fromString(a,256)}},t}(),O=function(){function t(){}return t.prototype.convert=function(t){return t},t.prototype.revert=function(t){return t},t.prototype.mulTo=function(t,e,i){t.multiplyTo(e,i)},t.prototype.sqrTo=function(t,e){t.squareTo(e)},t}(),A=function(){function t(t){this.m=t}return t.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},t.prototype.revert=function(t){return t},t.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},t.prototype.mulTo=function(t,e,i){t.multiplyTo(e,i),this.reduce(i)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}(),V=function(){function t(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}return t.prototype.convert=function(t){var e=N();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(B.ZERO)>0&&this.m.subTo(e,e),e},t.prototype.revert=function(t){var e=N();return t.copyTo(e),this.reduce(e),e},t.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var i=32767&t[e],r=i*this.mpl+((i*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[i=e+this.m.t]+=this.m.am(0,r,t,e,0,this.m.t);t[i]>=t.DV;)t[i]-=t.DV,t[++i]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},t.prototype.mulTo=function(t,e,i){t.multiplyTo(e,i),this.reduce(i)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}(),I=function(){function t(t){this.m=t,this.r2=N(),this.q3=N(),B.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t)}return t.prototype.convert=function(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var e=N();return t.copyTo(e),this.reduce(e),e},t.prototype.revert=function(t){return t},t.prototype.reduce=function(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)},t.prototype.mulTo=function(t,e,i){t.multiplyTo(e,i),this.reduce(i)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}();function N(){return new B(null)}function P(t,e){return new B(t,e)}var M="undefined"!=typeof navigator;M&&"Microsoft Internet Explorer"==navigator.appName?(B.prototype.am=function(t,e,i,r,n,s){for(var o=32767&e,h=e>>15;--s>=0;){var a=32767&this[t],u=this[t++]>>15,c=h*a+u*o;n=((a=o*a+((32767&c)<<15)+i[r]+(1073741823&n))>>>30)+(c>>>15)+h*u+(n>>>30),i[r++]=1073741823&a}return n},S=30):M&&"Netscape"!=navigator.appName?(B.prototype.am=function(t,e,i,r,n,s){for(;--s>=0;){var o=e*this[t++]+i[r]+n;n=Math.floor(o/67108864),i[r++]=67108863&o}return n},S=26):(B.prototype.am=function(t,e,i,r,n,s){for(var o=16383&e,h=e>>14;--s>=0;){var a=16383&this[t],u=this[t++]>>14,c=h*a+u*o;n=((a=o*a+((16383&c)<<14)+i[r]+n)>>28)+(c>>14)+h*u,i[r++]=268435455&a}return n},S=28),B.prototype.DB=S,B.prototype.DM=(1<<S)-1,B.prototype.DV=1<<S,B.prototype.FV=Math.pow(2,52),B.prototype.F1=52-S,B.prototype.F2=2*S-52;var j,q,L=[];for(j="0".charCodeAt(0),q=0;q<=9;++q)L[j++]=q;for(j="a".charCodeAt(0),q=10;q<36;++q)L[j++]=q;for(j="A".charCodeAt(0),q=10;q<36;++q)L[j++]=q;function H(t,e){var i=L[t.charCodeAt(e)];return null==i?-1:i}function C(t){var e=N();return e.fromInt(t),e}function F(t){var e,i=1;return 0!=(e=t>>>16)&&(t=e,i+=16),0!=(e=t>>8)&&(t=e,i+=8),0!=(e=t>>4)&&(t=e,i+=4),0!=(e=t>>2)&&(t=e,i+=2),0!=(e=t>>1)&&(t=e,i+=1),i}B.ZERO=C(0),B.ONE=C(1);var U,K,k=function(){function t(){this.i=0,this.j=0,this.S=[]}return t.prototype.init=function(t){var e,i,r;for(e=0;e<256;++e)this.S[e]=e;for(i=0,e=0;e<256;++e)i=i+this.S[e]+t[e%t.length]&255,r=this.S[e],this.S[e]=this.S[i],this.S[i]=r;this.i=0,this.j=0},t.prototype.next=function(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]},t}(),_=null;if(null==_){_=[],K=0;var z=void 0;if(window.crypto&&window.crypto.getRandomValues){var Z=new Uint32Array(256);for(window.crypto.getRandomValues(Z),z=0;z<Z.length;++z)_[K++]=255&Z[z]}var G=0,$=function(t){if((G=G||0)>=256||K>=256)window.removeEventListener?window.removeEventListener("mousemove",$,!1):window.detachEvent&&window.detachEvent("onmousemove",$);else try{var e=t.x+t.y;_[K++]=255&e,G+=1}catch(t){}};window.addEventListener?window.addEventListener("mousemove",$,!1):window.attachEvent&&window.attachEvent("onmousemove",$)}function Y(){if(null==U){for(U=new k;K<256;){var t=Math.floor(65536*Math.random());_[K++]=255&t}for(U.init(_),K=0;K<_.length;++K)_[K]=0;K=0}return U.next()}var J=function(){function t(){}return t.prototype.nextBytes=function(t){for(var e=0;e<t.length;++e)t[e]=Y()},t}(),X=function(){function t(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}return t.prototype.doPublic=function(t){return t.modPowInt(this.e,this.n)},t.prototype.doPrivate=function(t){if(null==this.p||null==this.q)return t.modPow(this.d,this.n);for(var e=t.mod(this.p).modPow(this.dmp1,this.p),i=t.mod(this.q).modPow(this.dmq1,this.q);e.compareTo(i)<0;)e=e.add(this.p);return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)},t.prototype.setPublic=function(t,e){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=P(t,16),this.e=parseInt(e,16)):console.error("Invalid RSA public key")},t.prototype.encrypt=function(t){var e=this.n.bitLength()+7>>3,i=function(t,e){if(e<t.length+11)return console.error("Message too long for RSA"),null;for(var i=[],r=t.length-1;r>=0&&e>0;){var n=t.charCodeAt(r--);n<128?i[--e]=n:n>127&&n<2048?(i[--e]=63&n|128,i[--e]=n>>6|192):(i[--e]=63&n|128,i[--e]=n>>6&63|128,i[--e]=n>>12|224)}i[--e]=0;for(var s=new J,o=[];e>2;){for(o[0]=0;0==o[0];)s.nextBytes(o);i[--e]=o[0]}return i[--e]=2,i[--e]=0,new B(i)}(t,e);if(null==i)return null;var r=this.doPublic(i);if(null==r)return null;for(var n=r.toString(16),s=n.length,o=0;o<2*e-s;o++)n="0"+n;return n},t.prototype.setPrivate=function(t,e,i){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=P(t,16),this.e=parseInt(e,16),this.d=P(i,16)):console.error("Invalid RSA private key")},t.prototype.setPrivateEx=function(t,e,i,r,n,s,o,h){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=P(t,16),this.e=parseInt(e,16),this.d=P(i,16),this.p=P(r,16),this.q=P(n,16),this.dmp1=P(s,16),this.dmq1=P(o,16),this.coeff=P(h,16)):console.error("Invalid RSA private key")},t.prototype.generate=function(t,e){var i=new J,r=t>>1;this.e=parseInt(e,16);for(var n=new B(e,16);;){for(;this.p=new B(t-r,1,i),0!=this.p.subtract(B.ONE).gcd(n).compareTo(B.ONE)||!this.p.isProbablePrime(10););for(;this.q=new B(r,1,i),0!=this.q.subtract(B.ONE).gcd(n).compareTo(B.ONE)||!this.q.isProbablePrime(10););if(this.p.compareTo(this.q)<=0){var s=this.p;this.p=this.q,this.q=s}var o=this.p.subtract(B.ONE),h=this.q.subtract(B.ONE),a=o.multiply(h);if(0==a.gcd(n).compareTo(B.ONE)){this.n=this.p.multiply(this.q),this.d=n.modInverse(a),this.dmp1=this.d.mod(o),this.dmq1=this.d.mod(h),this.coeff=this.q.modInverse(this.p);break}}},t.prototype.decrypt=function(t){var e=P(t,16),i=this.doPrivate(e);return null==i?null:function(t,e){for(var i=t.toByteArray(),r=0;r<i.length&&0==i[r];)++r;if(i.length-r!=e-1||2!=i[r])return null;for(++r;0!=i[r];)if(++r>=i.length)return null;for(var n="";++r<i.length;){var s=255&i[r];s<128?n+=String.fromCharCode(s):s>191&&s<224?(n+=String.fromCharCode((31&s)<<6|63&i[r+1]),++r):(n+=String.fromCharCode((15&s)<<12|(63&i[r+1])<<6|63&i[r+2]),r+=2)}return n}(i,this.n.bitLength()+7>>3)},t.prototype.generateAsync=function(t,e,i){var r=new J,n=t>>1;this.e=parseInt(e,16);var s=new B(e,16),o=this,h=function(){var e=function(){if(o.p.compareTo(o.q)<=0){var t=o.p;o.p=o.q,o.q=t}var e=o.p.subtract(B.ONE),r=o.q.subtract(B.ONE),n=e.multiply(r);0==n.gcd(s).compareTo(B.ONE)?(o.n=o.p.multiply(o.q),o.d=s.modInverse(n),o.dmp1=o.d.mod(e),o.dmq1=o.d.mod(r),o.coeff=o.q.modInverse(o.p),setTimeout((function(){i()}),0)):setTimeout(h,0)},a=function(){o.q=N(),o.q.fromNumberAsync(n,1,r,(function(){o.q.subtract(B.ONE).gcda(s,(function(t){0==t.compareTo(B.ONE)&&o.q.isProbablePrime(10)?setTimeout(e,0):setTimeout(a,0)}))}))},u=function(){o.p=N(),o.p.fromNumberAsync(t-n,1,r,(function(){o.p.subtract(B.ONE).gcda(s,(function(t){0==t.compareTo(B.ONE)&&o.p.isProbablePrime(10)?setTimeout(a,0):setTimeout(u,0)}))}))};setTimeout(u,0)};setTimeout(h,0)},t.prototype.sign=function(t,e,i){var r=function(t,e){if(e<t.length+22)return console.error("Message too long for RSA"),null;for(var i=e-t.length-6,r="",n=0;n<i;n+=2)r+="ff";return P("0001"+r+"00"+t,16)}((Q[i]||"")+e(t).toString(),this.n.bitLength()/4);if(null==r)return null;var n=this.doPrivate(r);if(null==n)return null;var s=n.toString(16);return 0==(1&s.length)?s:"0"+s},t.prototype.verify=function(t,e,i){var r=P(e,16),n=this.doPublic(r);return null==n?null:function(t){for(var e in Q)if(Q.hasOwnProperty(e)){var i=Q[e],r=i.length;if(t.substr(0,r)==i)return t.substr(r)}return t}(n.toString(16).replace(/^1f+00/,""))==i(t).toString()},t}(),Q={md2:"3020300c06082a864886f70d020205000410",md5:"3020300c06082a864886f70d020505000410",sha1:"3021300906052b0e03021a05000414",sha224:"302d300d06096086480165030402040500041c",sha256:"3031300d060960864801650304020105000420",sha384:"3041300d060960864801650304020205000430",sha512:"3051300d060960864801650304020305000440",ripemd160:"3021300906052b2403020105000414"},W={};W.lang={extend:function(t,e,i){if(!e||!t)throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");var r=function(){};if(r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t,t.superclass=e.prototype,e.prototype.constructor==Object.prototype.constructor&&(e.prototype.constructor=e),i){var n;for(n in i)t.prototype[n]=i[n];var s=function(){},o=["toString","valueOf"];try{/MSIE/.test(navigator.userAgent)&&(s=function(t,e){for(n=0;n<o.length;n+=1){var i=o[n],r=e[i];"function"==typeof r&&r!=Object.prototype[i]&&(t[i]=r)}})}catch(t){}s(t.prototype,i)}}};var tt={};void 0!==tt.asn1&&tt.asn1||(tt.asn1={}),tt.asn1.ASN1Util=new function(){this.integerToByteHex=function(t){var e=t.toString(16);return e.length%2==1&&(e="0"+e),e},this.bigIntToMinTwosComplementsHex=function(t){var e=t.toString(16);if("-"!=e.substr(0,1))e.length%2==1?e="0"+e:e.match(/^[0-7]/)||(e="00"+e);else{var i=e.substr(1).length;i%2==1?i+=1:e.match(/^[0-7]/)||(i+=2);for(var r="",n=0;n<i;n++)r+="f";e=new B(r,16).xor(t).add(B.ONE).toString(16).replace(/^-/,"")}return e},this.getPEMStringFromHex=function(t,e){return hextopem(t,e)},this.newObject=function(t){var e=tt.asn1,i=e.DERBoolean,r=e.DERInteger,n=e.DERBitString,s=e.DEROctetString,o=e.DERNull,h=e.DERObjectIdentifier,a=e.DEREnumerated,u=e.DERUTF8String,c=e.DERNumericString,f=e.DERPrintableString,l=e.DERTeletexString,p=e.DERIA5String,g=e.DERUTCTime,d=e.DERGeneralizedTime,v=e.DERSequence,m=e.DERSet,y=e.DERTaggedObject,b=e.ASN1Util.newObject,T=Object.keys(t);if(1!=T.length)throw"key of param shall be only one.";var S=T[0];if(-1==":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":"+S+":"))throw"undefined key: "+S;if("bool"==S)return new i(t[S]);if("int"==S)return new r(t[S]);if("bitstr"==S)return new n(t[S]);if("octstr"==S)return new s(t[S]);if("null"==S)return new o(t[S]);if("oid"==S)return new h(t[S]);if("enum"==S)return new a(t[S]);if("utf8str"==S)return new u(t[S]);if("numstr"==S)return new c(t[S]);if("prnstr"==S)return new f(t[S]);if("telstr"==S)return new l(t[S]);if("ia5str"==S)return new p(t[S]);if("utctime"==S)return new g(t[S]);if("gentime"==S)return new d(t[S]);if("seq"==S){for(var E=t[S],w=[],D=0;D<E.length;D++){var x=b(E[D]);w.push(x)}return new v({array:w})}if("set"==S){for(E=t[S],w=[],D=0;D<E.length;D++)x=b(E[D]),w.push(x);return new m({array:w})}if("tag"==S){var R=t[S];if("[object Array]"===Object.prototype.toString.call(R)&&3==R.length){var B=b(R[2]);return new y({tag:R[0],explicit:R[1],obj:B})}var O={};if(void 0!==R.explicit&&(O.explicit=R.explicit),void 0!==R.tag&&(O.tag=R.tag),void 0===R.obj)throw"obj shall be specified for 'tag'.";return O.obj=b(R.obj),new y(O)}},this.jsonToASN1HEX=function(t){return this.newObject(t).getEncodedHex()}},tt.asn1.ASN1Util.oidHexToInt=function(t){for(var e="",i=parseInt(t.substr(0,2),16),r=(e=Math.floor(i/40)+"."+i%40,""),n=2;n<t.length;n+=2){var s=("00000000"+parseInt(t.substr(n,2),16).toString(2)).slice(-8);r+=s.substr(1,7),"0"==s.substr(0,1)&&(e=e+"."+new B(r,2).toString(10),r="")}return e},tt.asn1.ASN1Util.oidIntToHex=function(t){var e=function(t){var e=t.toString(16);return 1==e.length&&(e="0"+e),e},i=function(t){var i="",r=new B(t,10).toString(2),n=7-r.length%7;7==n&&(n=0);for(var s="",o=0;o<n;o++)s+="0";for(r=s+r,o=0;o<r.length-1;o+=7){var h=r.substr(o,7);o!=r.length-7&&(h="1"+h),i+=e(parseInt(h,2))}return i};if(!t.match(/^[0-9.]+$/))throw"malformed oid string: "+t;var r="",n=t.split("."),s=40*parseInt(n[0])+parseInt(n[1]);r+=e(s),n.splice(0,2);for(var o=0;o<n.length;o++)r+=i(n[o]);return r},tt.asn1.ASN1Object=function(){this.getLengthHexFromValue=function(){if(void 0===this.hV||null==this.hV)throw"this.hV is null or undefined.";if(this.hV.length%2==1)throw"value hex must be even length: n="+"".length+",v="+this.hV;var t=this.hV.length/2,e=t.toString(16);if(e.length%2==1&&(e="0"+e),t<128)return e;var i=e.length/2;if(i>15)throw"ASN.1 length too long to represent by 8x: n = "+t.toString(16);return(128+i).toString(16)+e},this.getEncodedHex=function(){return(null==this.hTLV||this.isModified)&&(this.hV=this.getFreshValueHex(),this.hL=this.getLengthHexFromValue(),this.hTLV=this.hT+this.hL+this.hV,this.isModified=!1),this.hTLV},this.getValueHex=function(){return this.getEncodedHex(),this.hV},this.getFreshValueHex=function(){return""}},tt.asn1.DERAbstractString=function(t){tt.asn1.DERAbstractString.superclass.constructor.call(this),this.getString=function(){return this.s},this.setString=function(t){this.hTLV=null,this.isModified=!0,this.s=t,this.hV=stohex(this.s)},this.setStringHex=function(t){this.hTLV=null,this.isModified=!0,this.s=null,this.hV=t},this.getFreshValueHex=function(){return this.hV},void 0!==t&&("string"==typeof t?this.setString(t):void 0!==t.str?this.setString(t.str):void 0!==t.hex&&this.setStringHex(t.hex))},W.lang.extend(tt.asn1.DERAbstractString,tt.asn1.ASN1Object),tt.asn1.DERAbstractTime=function(t){tt.asn1.DERAbstractTime.superclass.constructor.call(this),this.localDateToUTC=function(t){return utc=t.getTime()+6e4*t.getTimezoneOffset(),new Date(utc)},this.formatDate=function(t,e,i){var r=this.zeroPadding,n=this.localDateToUTC(t),s=String(n.getFullYear());"utc"==e&&(s=s.substr(2,2));var o=s+r(String(n.getMonth()+1),2)+r(String(n.getDate()),2)+r(String(n.getHours()),2)+r(String(n.getMinutes()),2)+r(String(n.getSeconds()),2);if(!0===i){var h=n.getMilliseconds();if(0!=h){var a=r(String(h),3);o=o+"."+(a=a.replace(/[0]+$/,""))}}return o+"Z"},this.zeroPadding=function(t,e){return t.length>=e?t:new Array(e-t.length+1).join("0")+t},this.getString=function(){return this.s},this.setString=function(t){this.hTLV=null,this.isModified=!0,this.s=t,this.hV=stohex(t)},this.setByDateValue=function(t,e,i,r,n,s){var o=new Date(Date.UTC(t,e-1,i,r,n,s,0));this.setByDate(o)},this.getFreshValueHex=function(){return this.hV}},W.lang.extend(tt.asn1.DERAbstractTime,tt.asn1.ASN1Object),tt.asn1.DERAbstractStructured=function(t){tt.asn1.DERAbstractString.superclass.constructor.call(this),this.setByASN1ObjectArray=function(t){this.hTLV=null,this.isModified=!0,this.asn1Array=t},this.appendASN1Object=function(t){this.hTLV=null,this.isModified=!0,this.asn1Array.push(t)},this.asn1Array=new Array,void 0!==t&&void 0!==t.array&&(this.asn1Array=t.array)},W.lang.extend(tt.asn1.DERAbstractStructured,tt.asn1.ASN1Object),tt.asn1.DERBoolean=function(){tt.asn1.DERBoolean.superclass.constructor.call(this),this.hT="01",this.hTLV="0101ff"},W.lang.extend(tt.asn1.DERBoolean,tt.asn1.ASN1Object),tt.asn1.DERInteger=function(t){tt.asn1.DERInteger.superclass.constructor.call(this),this.hT="02",this.setByBigInteger=function(t){this.hTLV=null,this.isModified=!0,this.hV=tt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)},this.setByInteger=function(t){var e=new B(String(t),10);this.setByBigInteger(e)},this.setValueHex=function(t){this.hV=t},this.getFreshValueHex=function(){return this.hV},void 0!==t&&(void 0!==t.bigint?this.setByBigInteger(t.bigint):void 0!==t.int?this.setByInteger(t.int):"number"==typeof t?this.setByInteger(t):void 0!==t.hex&&this.setValueHex(t.hex))},W.lang.extend(tt.asn1.DERInteger,tt.asn1.ASN1Object),tt.asn1.DERBitString=function(t){if(void 0!==t&&void 0!==t.obj){var e=tt.asn1.ASN1Util.newObject(t.obj);t.hex="00"+e.getEncodedHex()}tt.asn1.DERBitString.superclass.constructor.call(this),this.hT="03",this.setHexValueIncludingUnusedBits=function(t){this.hTLV=null,this.isModified=!0,this.hV=t},this.setUnusedBitsAndHexValue=function(t,e){if(t<0||7<t)throw"unused bits shall be from 0 to 7: u = "+t;var i="0"+t;this.hTLV=null,this.isModified=!0,this.hV=i+e},this.setByBinaryString=function(t){var e=8-(t=t.replace(/0+$/,"")).length%8;8==e&&(e=0);for(var i=0;i<=e;i++)t+="0";var r="";for(i=0;i<t.length-1;i+=8){var n=t.substr(i,8),s=parseInt(n,2).toString(16);1==s.length&&(s="0"+s),r+=s}this.hTLV=null,this.isModified=!0,this.hV="0"+e+r},this.setByBooleanArray=function(t){for(var e="",i=0;i<t.length;i++)1==t[i]?e+="1":e+="0";this.setByBinaryString(e)},this.newFalseArray=function(t){for(var e=new Array(t),i=0;i<t;i++)e[i]=!1;return e},this.getFreshValueHex=function(){return this.hV},void 0!==t&&("string"==typeof t&&t.toLowerCase().match(/^[0-9a-f]+$/)?this.setHexValueIncludingUnusedBits(t):void 0!==t.hex?this.setHexValueIncludingUnusedBits(t.hex):void 0!==t.bin?this.setByBinaryString(t.bin):void 0!==t.array&&this.setByBooleanArray(t.array))},W.lang.extend(tt.asn1.DERBitString,tt.asn1.ASN1Object),tt.asn1.DEROctetString=function(t){if(void 0!==t&&void 0!==t.obj){var e=tt.asn1.ASN1Util.newObject(t.obj);t.hex=e.getEncodedHex()}tt.asn1.DEROctetString.superclass.constructor.call(this,t),this.hT="04"},W.lang.extend(tt.asn1.DEROctetString,tt.asn1.DERAbstractString),tt.asn1.DERNull=function(){tt.asn1.DERNull.superclass.constructor.call(this),this.hT="05",this.hTLV="0500"},W.lang.extend(tt.asn1.DERNull,tt.asn1.ASN1Object),tt.asn1.DERObjectIdentifier=function(t){var e=function(t){var e=t.toString(16);return 1==e.length&&(e="0"+e),e},i=function(t){var i="",r=new B(t,10).toString(2),n=7-r.length%7;7==n&&(n=0);for(var s="",o=0;o<n;o++)s+="0";for(r=s+r,o=0;o<r.length-1;o+=7){var h=r.substr(o,7);o!=r.length-7&&(h="1"+h),i+=e(parseInt(h,2))}return i};tt.asn1.DERObjectIdentifier.superclass.constructor.call(this),this.hT="06",this.setValueHex=function(t){this.hTLV=null,this.isModified=!0,this.s=null,this.hV=t},this.setValueOidString=function(t){if(!t.match(/^[0-9.]+$/))throw"malformed oid string: "+t;var r="",n=t.split("."),s=40*parseInt(n[0])+parseInt(n[1]);r+=e(s),n.splice(0,2);for(var o=0;o<n.length;o++)r+=i(n[o]);this.hTLV=null,this.isModified=!0,this.s=null,this.hV=r},this.setValueName=function(t){var e=tt.asn1.x509.OID.name2oid(t);if(""===e)throw"DERObjectIdentifier oidName undefined: "+t;this.setValueOidString(e)},this.getFreshValueHex=function(){return this.hV},void 0!==t&&("string"==typeof t?t.match(/^[0-2].[0-9.]+$/)?this.setValueOidString(t):this.setValueName(t):void 0!==t.oid?this.setValueOidString(t.oid):void 0!==t.hex?this.setValueHex(t.hex):void 0!==t.name&&this.setValueName(t.name))},W.lang.extend(tt.asn1.DERObjectIdentifier,tt.asn1.ASN1Object),tt.asn1.DEREnumerated=function(t){tt.asn1.DEREnumerated.superclass.constructor.call(this),this.hT="0a",this.setByBigInteger=function(t){this.hTLV=null,this.isModified=!0,this.hV=tt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)},this.setByInteger=function(t){var e=new B(String(t),10);this.setByBigInteger(e)},this.setValueHex=function(t){this.hV=t},this.getFreshValueHex=function(){return this.hV},void 0!==t&&(void 0!==t.int?this.setByInteger(t.int):"number"==typeof t?this.setByInteger(t):void 0!==t.hex&&this.setValueHex(t.hex))},W.lang.extend(tt.asn1.DEREnumerated,tt.asn1.ASN1Object),tt.asn1.DERUTF8String=function(t){tt.asn1.DERUTF8String.superclass.constructor.call(this,t),this.hT="0c"},W.lang.extend(tt.asn1.DERUTF8String,tt.asn1.DERAbstractString),tt.asn1.DERNumericString=function(t){tt.asn1.DERNumericString.superclass.constructor.call(this,t),this.hT="12"},W.lang.extend(tt.asn1.DERNumericString,tt.asn1.DERAbstractString),tt.asn1.DERPrintableString=function(t){tt.asn1.DERPrintableString.superclass.constructor.call(this,t),this.hT="13"},W.lang.extend(tt.asn1.DERPrintableString,tt.asn1.DERAbstractString),tt.asn1.DERTeletexString=function(t){tt.asn1.DERTeletexString.superclass.constructor.call(this,t),this.hT="14"},W.lang.extend(tt.asn1.DERTeletexString,tt.asn1.DERAbstractString),tt.asn1.DERIA5String=function(t){tt.asn1.DERIA5String.superclass.constructor.call(this,t),this.hT="16"},W.lang.extend(tt.asn1.DERIA5String,tt.asn1.DERAbstractString),tt.asn1.DERUTCTime=function(t){tt.asn1.DERUTCTime.superclass.constructor.call(this,t),this.hT="17",this.setByDate=function(t){this.hTLV=null,this.isModified=!0,this.date=t,this.s=this.formatDate(this.date,"utc"),this.hV=stohex(this.s)},this.getFreshValueHex=function(){return void 0===this.date&&void 0===this.s&&(this.date=new Date,this.s=this.formatDate(this.date,"utc"),this.hV=stohex(this.s)),this.hV},void 0!==t&&(void 0!==t.str?this.setString(t.str):"string"==typeof t&&t.match(/^[0-9]{12}Z$/)?this.setString(t):void 0!==t.hex?this.setStringHex(t.hex):void 0!==t.date&&this.setByDate(t.date))},W.lang.extend(tt.asn1.DERUTCTime,tt.asn1.DERAbstractTime),tt.asn1.DERGeneralizedTime=function(t){tt.asn1.DERGeneralizedTime.superclass.constructor.call(this,t),this.hT="18",this.withMillis=!1,this.setByDate=function(t){this.hTLV=null,this.isModified=!0,this.date=t,this.s=this.formatDate(this.date,"gen",this.withMillis),this.hV=stohex(this.s)},this.getFreshValueHex=function(){return void 0===this.date&&void 0===this.s&&(this.date=new Date,this.s=this.formatDate(this.date,"gen",this.withMillis),this.hV=stohex(this.s)),this.hV},void 0!==t&&(void 0!==t.str?this.setString(t.str):"string"==typeof t&&t.match(/^[0-9]{14}Z$/)?this.setString(t):void 0!==t.hex?this.setStringHex(t.hex):void 0!==t.date&&this.setByDate(t.date),!0===t.millis&&(this.withMillis=!0))},W.lang.extend(tt.asn1.DERGeneralizedTime,tt.asn1.DERAbstractTime),tt.asn1.DERSequence=function(t){tt.asn1.DERSequence.superclass.constructor.call(this,t),this.hT="30",this.getFreshValueHex=function(){for(var t="",e=0;e<this.asn1Array.length;e++)t+=this.asn1Array[e].getEncodedHex();return this.hV=t,this.hV}},W.lang.extend(tt.asn1.DERSequence,tt.asn1.DERAbstractStructured),tt.asn1.DERSet=function(t){tt.asn1.DERSet.superclass.constructor.call(this,t),this.hT="31",this.sortFlag=!0,this.getFreshValueHex=function(){for(var t=new Array,e=0;e<this.asn1Array.length;e++){var i=this.asn1Array[e];t.push(i.getEncodedHex())}return 1==this.sortFlag&&t.sort(),this.hV=t.join(""),this.hV},void 0!==t&&void 0!==t.sortflag&&0==t.sortflag&&(this.sortFlag=!1)},W.lang.extend(tt.asn1.DERSet,tt.asn1.DERAbstractStructured),tt.asn1.DERTaggedObject=function(t){tt.asn1.DERTaggedObject.superclass.constructor.call(this),this.hT="a0",this.hV="",this.isExplicit=!0,this.asn1Object=null,this.setASN1Object=function(t,e,i){this.hT=e,this.isExplicit=t,this.asn1Object=i,this.isExplicit?(this.hV=this.asn1Object.getEncodedHex(),this.hTLV=null,this.isModified=!0):(this.hV=null,this.hTLV=i.getEncodedHex(),this.hTLV=this.hTLV.replace(/^../,e),this.isModified=!1)},this.getFreshValueHex=function(){return this.hV},void 0!==t&&(void 0!==t.tag&&(this.hT=t.tag),void 0!==t.explicit&&(this.isExplicit=t.explicit),void 0!==t.obj&&(this.asn1Object=t.obj,this.setASN1Object(this.isExplicit,this.hT,this.asn1Object)))},W.lang.extend(tt.asn1.DERTaggedObject,tt.asn1.ASN1Object);var et,it=(et=function(t,e){return(et=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}et(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),rt=function(t){function e(i){var r=t.call(this)||this;return i&&("string"==typeof i?r.parseKey(i):(e.hasPrivateKeyProperty(i)||e.hasPublicKeyProperty(i))&&r.parsePropertiesFrom(i)),r}return it(e,t),e.prototype.parseKey=function(t){try{var e=0,i=0,r=/^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t)?function(t){var e;if(void 0===c){var i="0123456789ABCDEF",r=" \f\n\r\t \u2028\u2029";for(c={},e=0;e<16;++e)c[i.charAt(e)]=e;for(i=i.toLowerCase(),e=10;e<16;++e)c[i.charAt(e)]=e;for(e=0;e<r.length;++e)c[r.charAt(e)]=-1}var n=[],s=0,o=0;for(e=0;e<t.length;++e){var h=t.charAt(e);if("="==h)break;if(-1!=(h=c[h])){if(void 0===h)throw new Error("Illegal character at offset "+e);s|=h,++o>=2?(n[n.length]=s,s=0,o=0):s<<=4}}if(o)throw new Error("Hex encoding incomplete: 4 bits missing");return n}(t):d.unarmor(t),n=w.decode(r);if(3===n.sub.length&&(n=n.sub[2].sub[0]),9===n.sub.length){e=n.sub[1].getHexStringValue(),this.n=P(e,16),i=n.sub[2].getHexStringValue(),this.e=parseInt(i,16);var s=n.sub[3].getHexStringValue();this.d=P(s,16);var o=n.sub[4].getHexStringValue();this.p=P(o,16);var h=n.sub[5].getHexStringValue();this.q=P(h,16);var a=n.sub[6].getHexStringValue();this.dmp1=P(a,16);var u=n.sub[7].getHexStringValue();this.dmq1=P(u,16);var f=n.sub[8].getHexStringValue();this.coeff=P(f,16)}else{if(2!==n.sub.length)return!1;var l=n.sub[1].sub[0];e=l.sub[0].getHexStringValue(),this.n=P(e,16),i=l.sub[1].getHexStringValue(),this.e=parseInt(i,16)}return!0}catch(t){return!1}},e.prototype.getPrivateBaseKey=function(){var t={array:[new tt.asn1.DERInteger({int:0}),new tt.asn1.DERInteger({bigint:this.n}),new tt.asn1.DERInteger({int:this.e}),new tt.asn1.DERInteger({bigint:this.d}),new tt.asn1.DERInteger({bigint:this.p}),new tt.asn1.DERInteger({bigint:this.q}),new tt.asn1.DERInteger({bigint:this.dmp1}),new tt.asn1.DERInteger({bigint:this.dmq1}),new tt.asn1.DERInteger({bigint:this.coeff})]};return new tt.asn1.DERSequence(t).getEncodedHex()},e.prototype.getPrivateBaseKeyB64=function(){return l(this.getPrivateBaseKey())},e.prototype.getPublicBaseKey=function(){var t=new tt.asn1.DERSequence({array:[new tt.asn1.DERObjectIdentifier({oid:"1.2.840.113549.1.1.1"}),new tt.asn1.DERNull]}),e=new tt.asn1.DERSequence({array:[new tt.asn1.DERInteger({bigint:this.n}),new tt.asn1.DERInteger({int:this.e})]}),i=new tt.asn1.DERBitString({hex:"00"+e.getEncodedHex()});return new tt.asn1.DERSequence({array:[t,i]}).getEncodedHex()},e.prototype.getPublicBaseKeyB64=function(){return l(this.getPublicBaseKey())},e.wordwrap=function(t,e){if(!t)return t;var i="(.{1,"+(e=e||64)+"})( +|$\n?)|(.{1,"+e+"})";return t.match(RegExp(i,"g")).join("\n")},e.prototype.getPrivateKey=function(){var t="-----BEGIN RSA PRIVATE KEY-----\n";return(t+=e.wordwrap(this.getPrivateBaseKeyB64())+"\n")+"-----END RSA PRIVATE KEY-----"},e.prototype.getPublicKey=function(){var t="-----BEGIN PUBLIC KEY-----\n";return(t+=e.wordwrap(this.getPublicBaseKeyB64())+"\n")+"-----END PUBLIC KEY-----"},e.hasPublicKeyProperty=function(t){return(t=t||{}).hasOwnProperty("n")&&t.hasOwnProperty("e")},e.hasPrivateKeyProperty=function(t){return(t=t||{}).hasOwnProperty("n")&&t.hasOwnProperty("e")&&t.hasOwnProperty("d")&&t.hasOwnProperty("p")&&t.hasOwnProperty("q")&&t.hasOwnProperty("dmp1")&&t.hasOwnProperty("dmq1")&&t.hasOwnProperty("coeff")},e.prototype.parsePropertiesFrom=function(t){this.n=t.n,this.e=t.e,t.hasOwnProperty("d")&&(this.d=t.d,this.p=t.p,this.q=t.q,this.dmp1=t.dmp1,this.dmq1=t.dmq1,this.coeff=t.coeff)},e}(X);const nt=function(){function t(t){void 0===t&&(t={}),t=t||{},this.default_key_size=t.default_key_size?parseInt(t.default_key_size,10):1024,this.default_public_exponent=t.default_public_exponent||"010001",this.log=t.log||!1,this.key=null}return t.prototype.setKey=function(t){this.log&&this.key&&console.warn("A key was already set, overriding existing."),this.key=new rt(t)},t.prototype.setPrivateKey=function(t){this.setKey(t)},t.prototype.setPublicKey=function(t){this.setKey(t)},t.prototype.decrypt=function(t){try{return this.getKey().decrypt(p(t))}catch(t){return!1}},t.prototype.encrypt=function(t){try{return l(this.getKey().encrypt(t))}catch(t){return!1}},t.prototype.sign=function(t,e,i){try{return l(this.getKey().sign(t,e,i))}catch(t){return!1}},t.prototype.verify=function(t,e,i){try{return this.getKey().verify(t,p(e),i)}catch(t){return!1}},t.prototype.getKey=function(t){if(!this.key){if(this.key=new rt,t&&"[object Function]"==={}.toString.call(t))return void this.key.generateAsync(this.default_key_size,this.default_public_exponent,t);this.key.generate(this.default_key_size,this.default_public_exponent)}return this.key},t.prototype.getPrivateKey=function(){return this.getKey().getPrivateKey()},t.prototype.getPrivateKeyB64=function(){return this.getKey().getPrivateBaseKeyB64()},t.prototype.getPublicKey=function(){return this.getKey().getPublicKey()},t.prototype.getPublicKeyB64=function(){return this.getKey().getPublicBaseKeyB64()},t.version="3.2.1",t}()}],e={d:(t,i)=>{for(var r in i)e.o(i,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:i[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},i={};return t[1](0,i,e),i.default})()}));

    console.log('鑾峰彇鍔犲瘑绉橀挜');
    let req = new Request(BMW_SERVER_HOST + `/eadrax-coas/v1/cop/publickey`);
    req.method = 'GET';
    req.headers = BMW_HEADERS;
    let res = await req.loadJSON();

    if (res.code !== 200) {
        let ErrorText ='鑾峰彇鍔犲瘑绉橀挜澶辫触'
        let Errormessage = res['description']
        console.error(ErrorText + Errormessage);
        return null;
    }

    let passwordsetPublicKey = res.data.value
    console.log('鑾峰彇鍔犲瘑绉橀挜鎴愬姛');

    let JSEncrypt = module.exports;
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(passwordsetPublicKey);
    var encryptPassword = encrypt.encrypt(password);
    console.log("鐧婚檰瀵嗙爜鍔犲瘑鎴愬姛")
    return encryptPassword;
  }
  // --------------------------NET END--------------------------
}
await new Widget(Script.name(), { 
  AUTHOR_NAME: AUTHOR_NAME,
  remoteHomeLandRoot: remoteHomeLandRoot, 
  dependencyName: dependencyName, 
  WIDGET_NAME: WIDGET_NAME, 
  WIDGET_VERSION: WIDGET_VERSION,
  qqGroupNum: qqGroupNum,
  fileIniCloud: fileIniCloud
}).run();


// =================================================================================
// =================================================================================
async function downloadLSPDependency() {
  let fm = FileManager.local();
  const dependencyURL = `${remoteHomeLandRoot}/lib/${dependencyName}`;
  const update = needUpdateDependency();
  
  //////////////////////////////////////////////////////////
  console.log(`----------------------------------------`);
  const remoteDependencyExit = fm.fileExists(`${cacheDir}/${dependencyName}`);
  console.log(`馃殌 RELEASE渚濊禆鏂囦欢${remoteDependencyExit ? '宸插瓨鍦� 鉁�' : '涓嶅瓨鍦� 馃毇'}`);
  // ------------------------------
  if (!remoteDependencyExit || update) { // 涓嬭浇渚濊禆
    // 鍒涘缓鏍圭洰褰�
    if (!fm.fileExists(cacheDir)) {
      fm.createDirectory(cacheDir, true);
    }
    // 涓嬭浇
    console.log(`馃 RELEASE寮€濮�${update ? '鏇存柊' : '涓嬭浇'}渚濊禆~`);
    console.log(`----------------------------------------`);
    const req = new Request(dependencyURL);
    const moduleJs = await req.load();
    if (moduleJs && req.response.statusCode == 200) {
      fm.write(fm.joinPath(cacheDir, `/${dependencyName}`), moduleJs);
      keySave('VERSION', dependencyLSP);
      console.log('鉁� LSP杩滅▼渚濊禆鐜涓嬭浇鎴愬姛锛�');
      console.log(`----------------------------------------`);
    } else {
      console.error('馃毇 鑾峰彇渚濊禆鐜鑴氭湰澶辫触锛岃閲嶈瘯锛�');
      console.log(`----------------------------------------`);
    }
  }
}
/**
 * 鏄惁闇€瑕佹洿鏂颁緷璧栫増鏈�
 */
function needUpdateDependency() {
  return isDev || dependencyLSP != keyGet('VERSION');
};

function keySave(cacheKey, cache) {
  if (cache) {
    Keychain.set(Script.name() + cacheKey, cache);
  }
}

function keyGet(cacheKey, defaultValue = null) {
  if (Keychain.contains(Script.name() + cacheKey)) {
    return Keychain.get(Script.name() + cacheKey);
  } else {
    return defaultValue;
  }
}

// =================================================================================
// =================================================================================
