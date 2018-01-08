import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const CHATLIST = [
      { id: 11, name: '路飞',photo:"/assets/lufei.jpg" },
      { id: 11, name: '张三',photo:"/assets/lufei.jpg" },
      { id: 12, name: '李四',photo:"/assets/lufei.jpg" },
      { id: 13, name: '王二',photo:"/assets/lufei.jpg" },
      { id: 14, name: 'Celeritas',photo:"/assets/lufei.jpg" },
      { id: 15, name: 'Magneta',photo:"/assets/lufei.jpg" },
      { id: 16, name: 'RubberMan',photo:"/assets/lufei.jpg" },
      { id: 17, name: 'Dynama',photo:"/assets/lufei.jpg" },
      { id: 18, name: 'Dr IQ',photo:"/assets/lufei.jpg" },
      { id: 19, name: 'Magma' ,photo:"/assets/lufei.jpg"},
      { id: 20, name: 'Tornado' ,photo:"/assets/lufei.jpg"}
    ];
    return {CHATLIST};
  }
}