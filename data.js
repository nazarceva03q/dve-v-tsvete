const PHOTO_BASE='https://storage.yandexcloud.net/dve-v-tsvete/%D0%A4%D0%BE%D1%82%D0%BE/';
window.REVIEWS = [
{name:'Арина',image:PHOTO_BASE+'IMG_1536.jpeg',text:'Хочется выразить восторг и благодарность за такие волшебные букеты, что делаете вы! Каждый не похож на предыдущий, цветы всегда свежие, долго стоят и радуют глаз!'},
{name:'Ирина',image:PHOTO_BASE+'IMG_1537.jpeg',text:'Заказываю цветы в одном месте, всегда прошу что-то необычное и нежное, мастера волшебницы, создают прекрасные букеты. Вчера ваш шедевр подарил много много приятных эмоций имениннице!'},
{name:'Ольга',image:PHOTO_BASE+'IMG_1538.jpeg',text:'Сегодня девушка работала, одним слово "чудо"! Собрала букет с учетом моих пожеланий и не нарадуюсь им. Можете сами в этом убедиться'},
{name:'Эльвира',image:PHOTO_BASE+'IMG_1539.jpeg',text:'Это лучший цветочный в городе. Свежие цветы, приятные цены! Девочки профессионалы в своем деле, быстро реагируют на запрос, предоставляют разные варианты композиций для сравнения. Так же красивое оформление и креативные открытки в наличии. Большое вам спасибо'},
{name:'Ирина',image:PHOTO_BASE+'IMG_1540.jpeg',text:'Собрали очень красивый свадебный букет. Девушки очень доброжелательные, помогли и всё подсказали.'},
{name:'Анна',image:PHOTO_BASE+'IMG_1541.jpeg',text:'Отлично оформили букет, с учетом всех пожеланий, перед доставкой прислали фото с готовым букетом) Доставка была оперативной. Спасибо за работу и красивый букет'}
];
// null means a price or stock level has not yet been supplied by the shop.
window.PRODUCTS = [
{id:'mixed',image:PHOTO_BASE+'IMG_1542.jpeg',name:'Название',category:'Сборные букеты',price:null,stock:7,hit:true,description:'Описание товара появится после синхронизации каталога.',composition:'Подробнее о товаре',autumn:true},
{id:'mono',image:PHOTO_BASE+'IMG_1543.jpeg',name:'Название',category:'Монобукеты',price:null,stock:5,hit:true,description:'Описание товара появится после синхронизации каталога.',composition:'Подробнее о товаре'},
{id:'duo',image:PHOTO_BASE+'IMG_1544.jpeg',name:'Название',category:'Дуобукеты',price:null,stock:4,description:'Описание товара появится после синхронизации каталога.',composition:'Подробнее о товаре'},
{id:'composition',image:PHOTO_BASE+'IMG_1545.jpeg',name:'Название',category:'Цветочные композиции',price:null,stock:8,description:'Описание товара появится после синхронизации каталога.',composition:'Подробнее о товаре'},
{id:'single',image:PHOTO_BASE+'IMG_1546.jpeg',name:'Название',category:'Цветы поштучно',price:null,stock:12,hit:true,description:'Описание товара появится после синхронизации каталога.',composition:'Подробнее о товаре'},
{id:'home',image:PHOTO_BASE+'IMG_1547.jpeg',name:'Название',category:'Цветы для дома',price:null,stock:3,description:'Описание товара появится после синхронизации каталога.',composition:'Подробнее о товаре'},
{id:'wedding',image:PHOTO_BASE+'IMG_1554.jpeg',name:'Название',category:'Свадебные букеты',price:null,stock:2,description:'Описание товара появится после синхронизации каталога.',composition:'Подробнее о товаре'},
{id:'table',image:PHOTO_BASE+'IMG_1549.jpeg',name:'Название',category:'Букеты на стол',price:null,stock:6,description:'Описание товара появится после синхронизации каталога.',composition:'Подробнее о товаре'},
{id:'exotic',image:PHOTO_BASE+'IMG_1560.jpeg',name:'Название',category:'Экзотические растения под заказ',price:null,stock:null,preorder:true,description:'Растение заказывается для клиента примерно за неделю. Менеджер подтвердит наличие и срок, затем согласует предоплату или полную оплату.',composition:'Подробнее о товаре'},
{id:'new-year',image:PHOTO_BASE+'IMG_1563.jpeg',name:'Название',category:'Новогодние композиции',price:null,stock:null,preorder:true,soon:true,description:'Сезонная коллекция будет добавлена через бот ближе к Новому году.',composition:'Подробнее о товаре'}
];
window.CATEGORIES=['Все','Сборные букеты','Монобукеты','Дуобукеты','Цветочные композиции','Цветы поштучно','Цветы для дома','Новогодние композиции','Свадебные букеты','Букеты на стол','Экзотические растения под заказ'];
window.EXTRA_PRODUCTS=[
{name:'Название',image:PHOTO_BASE+'IMG_1550.jpeg',category:'Вазы',stock:4},{name:'Название',image:PHOTO_BASE+'IMG_1551.jpeg',category:'Конверты',stock:9},{name:'Название',image:PHOTO_BASE+'IMG_1552.jpeg',category:'Открытки ручной работы',stock:6},{name:'Название',image:PHOTO_BASE+'IMG_1553.jpeg',category:'Сухоцветы',stock:5},{name:'Название',image:PHOTO_BASE+'IMG_1555.jpeg',category:'Свечи',stock:7},{name:'Название',image:PHOTO_BASE+'IMG_1556.jpeg',category:'Ёлки и венки',stock:null,soon:true}
];
