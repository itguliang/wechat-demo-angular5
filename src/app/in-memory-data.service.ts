import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const CHATLIST = [{
      id: 10, name: '路飞',photo:"assets/lufei.jpg",date:1515467235585,
      msgs:[{
        flow:'in',
        msg:'你好，我是路飞～'
      },{
        flow:'out',
        msg:'哈哈我是IT姑凉'
      },{
        flow:'in',
        msg:'跳一跳居然有外挂'
      },{
        flow:'out',
        msg:'难怪'
      }]
    },{
      id: 11, name: '张三',photo:"assets/lufei.jpg",date:1515467235585,
      msgs:[{
        flow:'in',
        msg:'你好，我是张三～'
      },{
        flow:'out',
        msg:'哈哈我是IT姑凉'
      }]
    },{ 
      id: 12, name: '李四',photo:"assets/lufei.jpg",date:1515467235585,
      msgs:[{
        flow:'in',
        msg:'你好，我是李四～'
      },{
        flow:'out',
        msg:'你好'
      }]
    },{ 
      id: 13, name: '王二',photo:"assets/lufei.jpg",date:1515467235585,
      msgs:[{
        flow:'in',
        msg:'你好，我是王二～'
      },{
        flow:'out',
        msg:'哈哈我是IT姑凉'
      }]
    },{
      id: 14, name: 'Celeritas',photo:"assets/lufei.jpg",date:1515467235585,
      msgs:[{
        flow:'in',
        msg:'你好，我是Celeritas～'
      },{
        flow:'out',
        msg:'哈哈我是IT姑凉'
      }]
    },{
      id: 15, name: 'Magneta',photo:"assets/lufei.jpg",date:1515467235585,
      msgs:[{
        flow:'in',
        msg:'你好，我是Magneta～'
      },{
        flow:'out',
        msg:'哈哈我是IT姑凉'
      }]
    },{
      id: 16, name: 'RubberMan',photo:"assets/lufei.jpg",date:1515467235585,
      msgs:[{
        flow:'in',
        msg:'你好，我是RubberMan～'
      },{
        flow:'out',
        msg:'哈哈我是IT姑凉'
      }]
    },{
      id: 17, name: 'Dynama',photo:"assets/lufei.jpg",date:1515467235585,
      msgs:[{
        flow:'in',
        msg:'你好，我是Dynama～'
      },{
        flow:'out',
        msg:'我是IT姑凉'
      }]
    },{
      id: 18, name: 'DrIQ',photo:"assets/lufei.jpg",date:1515467235585,
      msgs:[{
        flow:'in',
        msg:'你好，我是DrIQ～'
      },{
        flow:'out',
        msg:'哈哈我是IT姑凉'
      }]
    },{
      id: 19, name: 'Magma' ,photo:"assets/lufei.jpg",date:1515467235585,
      msgs:[{
        flow:'in',
        msg:'你好，我是Magma～'
      },{
        flow:'out',
        msg:'哈哈我是IT姑凉'
      }]
    },{
      id: 20, name: 'Tornado' ,photo:"assets/lufei.jpg",date:1515467235585,
      msgs:[{
        flow:'in',
        msg:'你好，我是Tornado～'
      },{
        flow:'out',
        msg:'哈哈我是IT姑凉'
      }]
    }
    ];
    return {CHATLIST};
  }
}