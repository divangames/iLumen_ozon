const cards = [
  {
    "id": "cover",
    "title": "Обложка",
    "headline": "Комфортный свет каждый день",
    "intro": "Крупный светильник, диаметр и два понятных действия.",
    "done": "Обновлённая обложка показывает люстру в комнате. Ø 50 см, регулировка яркости и пульт выделены отдельными короткими блоками. Категория товара остаётся в подзаголовке.",
    "why": "В миниатюре видно и сам предмет, и причины открыть карточку. Короткие подписи помогают быстро понять предложение.",
    "add": "Проверить мобильную миниатюру с плашками Ozon. Отступить важными надписями от краёв. Пульт на макете сопоставить с реальным образцом.",
    "note": "Новая версия из папки «после». Это макет, а не фотографическое подтверждение комплектации."
  },
  {
    "id": "model",
    "title": "Выбранная модель",
    "headline": "Вы заказываете именно её",
    "intro": "Отдельный паспорт артикула 2069656653.",
    "done": "Указаны белый матовый плафон, диаметр 50 см, высота 7 см, четыре режима и пульт. Артикул Ozon связывает изображение с конкретным товаром.",
    "why": "Покупателю проще проверить выбранный вариант. Это особенно полезно, когда у разных моделей одинаковые названия и селектор цвета.",
    "add": "Добавить отдельную таблицу сравнения 40 см / 50 см / RGB. В новых материалах её пока нет: паспорт одной модели не объясняет всю линейку.",
    "note": "50 × 7 см и четыре режима совпадают с видимыми полями Ozon 10.11.2026; это сверка записи, не измерение образца."
  },
  {
    "id": "size",
    "title": "Размер в комнате",
    "headline": "Посмотрите, как впишется",
    "intro": "Интерьер, вид снизу и профиль в одной композиции.",
    "done": "Новый слайд показывает люстру у потолка, отдельно подписывает диаметр 50 см и высоту 7 см. Добавлено напоминание сверить размеры с местом установки.",
    "why": "Покупатель оценивает форму и выступ от потолка. Убрана прежняя подпись про условный диван 180 см: масштаб мебели больше не выдаётся за измерение.",
    "add": "Проверить пропорции на реальной фотографии и показать расстояние до мебели в конкретном интерьере, если оно измерено.",
    "note": "Размеры совпадают с полями карточки. Интерьер — предоставленная визуализация, не точный масштабный чертёж."
  },
  {
    "id": "light",
    "title": "Сценарии света",
    "headline": "Четыре сценария света",
    "intro": "Одна комната помогает увидеть разницу между режимами.",
    "done": "Тёплый, нейтральный, холодный свет и ночник показаны в одинаковом ракурсе. Подписи объясняют сценарии, а нижний блок — переключение с пульта.",
    "why": "Сравнение отвечает на вопрос «как я буду пользоваться». Противоречивые числовые температуры не перенесены в новый макет.",
    "add": "Согласовать температуры по паспорту: на старом слайде 3000 / 4500 / 6500 K, в действующем поле — 5000 K. Снять реальное переключение.",
    "note": "Иллюстрация режимов. Цвет экрана не передаёт точную температуру и освещённость."
  },
  {
    "id": "control",
    "title": "Управление",
    "headline": "Свет под вашим контролем",
    "intro": "Пульт в руке и три основных действия рядом.",
    "done": "Включение, регулировка яркости и выбор оттенка собраны в последовательный список. Пульт в комплекте указан явно.",
    "why": "Вместо россыпи кнопок покупатель получает понятный сценарий управления. Крупные подписи читаются быстрее старой универсальной схемы.",
    "add": "Проверить кнопки Auxiliary и Section на образце. Показать память после пульта и настенного выключателя отдельно; не обещать её по внешнему виду пульта.",
    "note": "Наличие пульта заявлено и в текущем текстовом комплекте Ozon; функции каждой кнопки ещё требуют проверки."
  },
  {
    "id": "kit",
    "title": "Комплектация",
    "headline": "Что приедет в заказе",
    "intro": "Состав коробки вынесен в отдельный слайд.",
    "done": "Перечислены светильник, пульт и батарейки, инструкция и крепёж. Есть рекомендация изучить инструкцию и оговорка о подготовке потолка.",
    "why": "Список легко проверить перед заказом. Покупатель отделяет содержимое коробки от подготовки места установки.",
    "add": "Заменить условные изображения фотографией реального комплекта. Показать тип и количество батареек, инструкцию и крепёж. Эти обещания уже были в исходнике — улучшена их подача.",
    "note": "В Ozon 10.11 указаны лампа, ПДУ, крепление и батарейки. Инструкцию и фактическое содержимое нужно сверить с партией."
  },
  {
    "id": "install",
    "title": "Монтаж и упаковка",
    "headline": "Комплект готов к установке",
    "intro": "Способ крепления и упаковка показаны отдельно.",
    "done": "Новый слайд описывает крепление саморезами через плоское основание, необходимость прочного основания и защитную упаковку для перевозки.",
    "why": "Появляется конкретное объяснение установки вместо общего «под все потолки». Упаковка помогает представить получение заказа.",
    "add": "Показать обратную сторону светильника и реальный крепёж. Согласовать способ монтажа с паспортом: в действующем поле Ozon до сих пор стоит «Подвесное».",
    "note": "Схема в макете не заменяет инструкцию. Защиту упаковки лучше подтверждать её реальным устройством."
  },
  {
    "id": "support",
    "title": "Связь с продавцом",
    "headline": "Есть вопрос? Мы на связи",
    "intro": "Понятный маршрут обращения без спорного срока гарантии.",
    "done": "Вместо «2 года» в новой версии — три шага: открыть заказ, написать продавцу, описать вопрос и приложить фото. Есть напоминание сохранить информацию о заказе.",
    "why": "Слайд помогает действовать при вопросах о комплекте или работе светильника. Убрано неподтверждённое число из макета.",
    "add": "Срок гарантии всё равно нужно согласовать и указать в карточке: сейчас на Ozon обложка обещает 2 года, поле — 25 месяцев; в старом слайде есть 5 лет.",
    "note": "Сервисный слайд не заменяет условия гарантии и не означает, что расхождение в Ozon уже исправлено."
  },
  {
    "id": "coverage",
    "title": "Обложка для теста",
    "headline": "Свет для всей комнаты",
    "intro": "Второй вариант делает акцент на интерьере и площади.",
    "done": "На макете «До 30 м²», диаметр 50 см, регулировка яркости и крупный пульт. Снизу есть условие: освещённость зависит от высоты потолка, отделки и режима.",
    "why": "Комната показывает сценарий использования. Это альтернативная обложка для теста, а не обязательный девятый слайд основной галереи.",
    "add": "30 м² совпадают с полем Ozon, но требуют обоснования световым потоком и условиями. Светильник здесь мельче, поэтому сравнить читаемость и CTR с первой обложкой.",
    "note": "Не обещать одинаковую освещённость в любой комнате. Сноска не заменяет подтверждение площади."
  }
];

const beforeCards = [
  {id:'before-cover',title:'Исходная обложка',headline:'Люстра светодиодная',done:'Исходный слайд из папки «было»: крупное название категории, 2 года гарантии, 50 см, 120 Вт, 4 режима, пульт и флаг.',why:'Предлагаем отдать больше внимания товару, его форме и удобству. Убрать конкуренцию крупных плашек и проверить отступы под элементы Ozon.',note:'Оригинал пользователя, файл 20974056708.webp. Надписи на исходном слайде не подтверждают характеристики.'},
  {id:'before-light',title:'Исходные режимы света',headline:'Регулировка температуры и яркости',done:'Четыре режима уже показаны на исходном слайде: тёплый 3000 К, холодный 6500 К, нейтральный 4500 К и ночник.',why:'Идея полезная, её сохраняем. Обновляем подачу и согласуем температуры с паспортом и полями карточки, где аудит отметил 5000 К.',note:'Оригинал 13155382228.webp. Значения Кельвинов требуют сверки.'},
  {id:'before-size',title:'Исходные размеры',headline:'Размеры и крепление',done:'На исходном слайде показаны 50 см и 7 см, перечислены натяжной потолок, гипсокартон, подвесной потолок и бетон.',why:'В новом слайде акцентируем диаметр и профиль, добавляем масштаб в комнате. Возможность крепления к разным потолкам и конкретные условия нужно подтвердить.',note:'Оригинал 7497057995.webp. Схема не заменяет инструкцию по монтажу.'},
  {id:'before-control',title:'Исходное управление',headline:'Пульт с подписями функций',done:'Реальный вид пульта и подписи функций уже есть в исходных материалах. На слайде отмечены яркость, температура, ночник и дополнительные режимы.',why:'Сохраняем полезное объяснение. В новой подаче группируем основные действия; дополнительные функции указываем только для подходящей модели.',note:'Оригинал 7497058452.webp. Подписи «при наличии» не следует превращать в обещание для всех моделей.'},
  {id:'before-kit',title:'Исходная комплектация',headline:'Комплект и упаковка',done:'В исходнике показаны пульт, инструкция, батарейки, крепления, упаковка и светильник.',why:'Сведения о комплекте нужны покупателю. Уточняем фактический состав, делаем его короче и показываем реальное крепление крупно.',note:'Оригинал 7497057786.webp. Комплектацию сверить с конкретной поставкой.'},
  {id:'before-install',title:'Исходная инструкция',headline:'Крепление через основание',done:'Есть отдельный слайд с текстом о креплении саморезами через плоское основание и схемой потолка.',why:'Инструкцию не теряем при переработке галереи. Добавляем фото основания и крепления; согласуем способ установки с документацией и полем типа монтажа.',note:'Оригинал 7500519914.webp. Изображение — часть предоставленной инфографики, а не проверенная инструкция по установке.'},
  {id:'before-night',title:'Исходный ночник',headline:'Сценарий для отдыха',done:'Ночной режим вынесен в отдельное эмоциональное изображение.',why:'Сценарий сохраняем, но не дублируем его без новой информации: в новой галерее он входит в сравнение четырёх состояний.',note:'Оригинал 7497058256.webp. Эффекты фона не подтверждают дополнительные функции светильника.'},
  {id:'before-interior',title:'Исходные интерьеры',headline:'Светильник в разных комнатах',done:'Светильник показан в коридоре, кухне, спальне и гостиной.',why:'Интерьерная подача уже была, её можно развить во вторую тестовую обложку. Масштаб и визуализацию нужно сделать убедительными.',note:'Оригинал 7497058271.webp. Это исходная визуализация, не подтверждение пригодности для любой комнаты.'},
  {id:'before-benefits',title:'Исходные преимущества',headline:'Срок службы и экономичность',done:'На слайде заявлены 15 лет службы, 50 000 световых часов и экономичность.',why:'Такие цифры оставлять только при наличии обоснования. В первую очередь показываем понятные и подтверждённые свойства конкретной модели.',note:'Оригинал 7500476470.webp. 15 лет и 50 000 часов — заявления на старой инфографике, а не результаты нашей проверки.'},
  {id:'before-technology',title:'Исходные технологии',headline:'Ещё один срок гарантии',done:'На слайде о светодиодах и энергопотреблении есть значок «Гарантия 5 лет». На обложке при этом указаны 2 года.',why:'Новое наблюдение по предоставленным исходникам: нужно выяснить, к чему относится значок, и устранить неоднозначность вместе с расхождением 25 месяцев из аудита.',note:'Оригинал 8084665844.webp. Срок 5 лет нельзя считать подтверждённой гарантией на весь светильник без документов.'}
];
const researchCards = [
  {src:'assets/research/lucimo-cover.jpg', title:'LUCIMO · 1347165797', headline:'Исходная обложка LUCIMO', done:'Крупная люстра и пульт, параметры и четыре сценария. В верхней строке одновременно указаны 40/50 см и 72/120 Вт.', why:'Для iLumen оставляем на обложке данные выбранной модели. Сравнение всей линейки переносим на отдельный слайд.', note:'Изображение с Ozon, получено 10.11.2026. Источник и ссылка на товар находятся в разделе «Конкуренты». Это материал конкурента, не макет iLumen.'},
  {src:'assets/research/smartbuy-cover.jpg', title:'Smartbuy · 1827059716', headline:'Исходная обложка Smartbuy MEZZO', done:'На изображении заявлены 50 см, 9600 лм, 40 м² и 120 Вт. В доступном поле той же карточки указано 25 м².', why:'Слайды и поля должны опираться на один проверенный набор данных. Для iLumen подтверждаем световой поток и условия оценки площади, а не копируем числа конкурента.', note:'Изображение с Ozon Беларусь, получено 10.11.2026. Расхождение 40 / 25 м² повторно подтверждено на российской странице в обычном браузере 10.11.2026.'},
  {src:'assets/research/rivoli-cover.jpg', title:'Rivoli · 2969492035', headline:'Исходная обложка Rivoli 80 Вт', done:'Светильник показан в светлом интерьере. На обложке два коротких аргумента: площадь и пульт. Диаметр не указан.', why:'Для iLumen это референс интерьерной подачи. Добавляем понятный размер и проверяем вариант в тесте. 80 Вт у Rivoli не считаем эквивалентом 120 Вт у iLumen.', note:'Изображение с Ozon, получено 10.11.2026. Это новая найденная модель 80 Вт, а не неустановленная Rivoli 120 Вт из прежнего аудита.'}
];
const beforeForTopic = [0,2,null,9];
const topics = [
  {label:'Обложка карточки',card:0,title:'От категории — к пользе',before:'Огромная надпись «ЛЮСТРА СВЕТОДИОДНАЯ» забирает внимание. Часть данных попадает под элементы Ozon.',after:'Крупный товар, спокойный фон и три аргумента рядом: размер, яркость, пульт.',why:'Обложка помогает быстро понять предложение. Остальные подробности раскрываются следующими слайдами, не конкурируя друг с другом.',next:'Два новых варианта уже добавлены. Проверить их в миниатюре с интерфейсом Ozon, обосновать площадь 30 м² и запустить сопоставимый тест.',mockTitle:'ЛЮСТРА СВЕТОДИОДНАЯ',mock:['Общее название — главный акцент','Важные надписи близко к краям']},
  {label:'Характеристики',card:2,title:'Один товар — одни данные',before:'«50 см — длина», противоречивые Кельвины, IP20 рядом с «водонепроницаемостью», спорный тип монтажа.',after:'На новом слайде показаны диаметр и профиль. Для всех полей нужен единый набор подтверждённых характеристик.',why:'Когда слайд, описание и характеристики говорят одно и то же, покупателю не приходится решать, какая версия верна.',next:'Сначала сверить с паспортом температуру, IP, монтаж и размеры. Затем синхронно обновить текст, поля и инфографику.',mockTitle:'Каким данным верить?',mock:['На слайде: 3000 / 4500 / 6500 К','В характеристиках: 5000 К','IP20 + «водонепроницаемость»']},
  {label:'Выбор модели',card:1,title:'Выбор по смыслу',before:'В витрине повторяются общие названия; у проверенной RGB-модели название тоже общее, а выбранный цвет — «кремовый».',after:'В новой версии есть паспорт выбранной модели: 50 × 7 см, четыре режима и артикул 2069656653. Таблицу сравнения линейки ещё нужно добавить.',why:'Покупатель видит принципиальную разницу ещё до заказа. Функциональность перестаёт скрываться за названием оттенка.',next:'Разделить названия обычной, компактной и RGB-модели; при возможности изменить подписи вариантов. Не объединять разные характеристики в одно обещание.',mockTitle:'Цвет или другая модель?',mock:['Белый / слоновая кость / кремовый','Одно название для разных функций','RGB-модель не выделена названием']},
  {label:'Доверие к карточке',card:7,title:'Обещание с понятным шагом',before:'В описании встречается Smartbuy, абзацы повторяются. На обложке 2 года гарантии, в полях — 25 месяцев. На добавленном исходном слайде «Технологии» есть значок «Гарантия 5 лет».',after:'Новый сервисный слайд показывает три шага обращения. Спорная цифра гарантии убрана из макета; срок в действующей карточке ещё нужно согласовать.',why:'Последовательность бренда и понятный порядок обращения поддерживают доверие. Крупная цифра полезна только тогда, когда она верна.',next:'Проверить фактический бренд, убрать повторы, подтвердить срок гарантии. Описать порядок обращения и привести к одному виду все блоки.',mockTitle:'Два бренда. Два срока.',mock:['iLumen в карточке / Smartbuy в описании','2 года на обложке / 25 месяцев в полях','Повторяющиеся абзацы']}
];

const facts = [
  ['Бренд и описание','В описании дважды встречается Smartbuy и повторяются абзацы.','Сверить фактический бренд. При ошибке копирования убрать чужое название; описание заменить конкретикой: размер, свет, управление, монтаж и комплект.'],
  ['Температура света','На втором слайде 3000 / 4500 / 6500 К, в характеристиках — 5000 К.','Проверить паспорт и реальный образец. Указать одинаковые значения во всех полях и изображениях; сейчас не выбирать одно из чисел наугад.'],
  ['IP и условия использования','В браузере подтверждено IP20. «Водонепроницаемость» отмечалась в первом аудите; заново это обещание не найдено.','Проверить документацию. Удалить неподтверждённое свойство и корректно описать допустимые условия использования.'],
  ['Монтаж и комплект','В поле стоит «подвесное», хотя светильник визуально прилегает к потолку. На новом макете есть батарейки.','Подтвердить тип крепления, показать основание и фактический комплект. Убрать батарейки из текста, если их нет в поставке.'],
  ['Срок гарантии','В браузере 10.11: 2 года на обложке и 25 месяцев в характеристиках. В добавленных исходниках на слайде «Технологии» найден значок «Гарантия 5 лет».','Выяснить, к чему относится каждый срок, подтвердить гарантию по документам и устранить неоднозначность во всех блоках. В новой версии сервисного слайда срока уже нет; это не исправляет данные на Ozon.'],
  ['Размер и названия','Круглая модель подписана «50 см — длина», разные модели имеют одинаковое название.','Указать «Ø 50 см — диаметр», сверить высоту. Разделить названия моделей по размеру и функциям. Мощность 70 / 120 Вт добавлять после проверки.']
];

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
let selectedTopic = 0, compareState = 'after', selectedCard = 0, viewerCard = 0;

function setTopic(index, moveFocus=false) {
  selectedTopic = index;
  const topic = topics[index];
  $$('[data-topic]').forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;if(moveFocus&&i===index)b.focus();});
  $('#comparison-panel').setAttribute('aria-labelledby',`topic-${index}`);
  $('#stage-caption').textContent=topic.label;
  $('#compare-title').textContent=topic.title;
  ['before','after','why','next'].forEach(key=>$('#compare-'+key).textContent=topic[key]);
  renderComparison();
}

function renderComparison() {
  const topic=topics[selectedTopic], box=$('#compare-visual');
  box.replaceChildren();
  $$('[data-state]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.state===compareState)));
  if(compareState==='after') {
    const button=document.createElement('button');button.className='art-button';button.setAttribute('aria-label',`Открыть слайд «${cards[topic.card].title}»`);
    const img=document.createElement('img');img.src=`assets/${cards[topic.card].id}.webp`;img.alt=cards[topic.card].headline;img.width=1086;img.height=1448;
    button.append(img);button.addEventListener('click',()=>openViewer(topic.card));box.append(button);
    $('#visual-source').textContent='Предоставленный макет. Характеристики требуют сверки с документами.';
  } else if(beforeForTopic[selectedTopic]!==null) {
    const index=beforeForTopic[selectedTopic],card=beforeCards[index];
    const button=document.createElement('button');button.className='art-button';button.setAttribute('aria-label',`Открыть: ${card.title}`);
    const img=document.createElement('img');img.src=`assets/${card.id}.webp`;img.alt=card.headline;
    button.append(img);button.addEventListener('click',()=>openViewer(index,'before'));box.append(button);
    $('#visual-source').textContent='Ваш исходный слайд из папки «было». Нажмите, чтобы рассмотреть.';
  } else {
    const panel=document.createElement('div');panel.className='reconstruction';
    const label=document.createElement('span');label.textContent='Зафиксировано в ТЗ';
    const heading=document.createElement('h4');heading.textContent=topic.mockTitle;panel.append(label,heading);
    topic.mock.forEach(text=>{const p=document.createElement('p');p.textContent=text;panel.append(p);});
    const note=document.createElement('small');note.textContent='Текстовая реконструкция прежних несостыковок';panel.append(note);box.append(panel);
    $('#visual-source').textContent='Проблема выбора вариантов описана в аудите. Скриншота селектора среди исходных слайдов нет.';
  }
}

$$('[data-topic]').forEach((button,index)=>{
  button.addEventListener('click',()=>setTopic(index));
  button.addEventListener('keydown',event=>{
    let next=index;
    if(event.key==='ArrowRight')next=(index+1)%topics.length;
    else if(event.key==='ArrowLeft')next=(index+topics.length-1)%topics.length;
    else if(event.key==='Home')next=0;
    else if(event.key==='End')next=topics.length-1;
    else return;
    event.preventDefault();setTopic(next,true);
  });
});
$$('[data-state]').forEach(button=>button.addEventListener('click',()=>{compareState=button.dataset.state;renderComparison();}));

const rail=$('#gallery-rail');
cards.forEach((card,index)=>{
  const button=document.createElement('button');button.className='thumb';button.dataset.card=index;button.setAttribute('aria-pressed',String(index===0));button.setAttribute('aria-label',`Слайд ${index+1}: ${card.title}`);
  const img=document.createElement('img');img.src=`assets/${card.id}.webp`;img.alt=card.headline;img.loading='lazy';img.width=1086;img.height=1448;
  const label=document.createElement('span');const n=document.createElement('b');n.textContent=String(index+1).padStart(2,'0');label.append(n,document.createTextNode(card.title));button.append(img,label);button.addEventListener('click',()=>setCard(index));rail.append(button);
});

function setCard(index) {
  selectedCard=index;
  const card=cards[index];
  $('#detail-image').src=`assets/${card.id}.webp`;$('#detail-image').alt=card.headline;
  $('#detail-count').textContent=`${index+1} / ${cards.length}`;
  $('#detail-title').textContent=card.headline;$('#detail-intro').textContent=card.intro;
  $('#detail-done').textContent=card.done;$('#detail-why').textContent=card.why;$('#detail-add').textContent=card.add;
  $$('[data-card]').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
  $('#gallery-prev').disabled=index===0;$('#gallery-next').disabled=index===cards.length-1;
}
$('#gallery-prev').addEventListener('click',()=>{if(selectedCard>0)setCard(selectedCard-1);});
$('#gallery-next').addEventListener('click',()=>{if(selectedCard<cards.length-1)setCard(selectedCard+1);});
$('#detail-open').addEventListener('click',()=>openViewer(selectedCard));$('#detail-large').addEventListener('click',()=>openViewer(selectedCard));

const lightScenes=[['Тёплый свет','Вечерний отдых и мягкая атмосфера.'],['Нейтральный свет','Повседневные дела и спокойное освещение комнаты.'],['Холодный свет','Более прохладное восприятие пространства.'],['Ночной режим','Приглушённый свет для вечернего сценария.']];
$$('[data-light]').forEach(button=>button.addEventListener('click',()=>{
  const index=Number(button.dataset.light);$('#scene-crop').dataset.scene=String(index);
  $('#scene-name').textContent=lightScenes[index][0];$('#scene-image').alt=lightScenes[index][0]+' в комнате';$('#light-description').textContent=lightScenes[index][1];
  $$('[data-light]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
}));

facts.forEach(([title,before,after])=>{
  const detail=document.createElement('details');detail.className='fact';
  const summary=document.createElement('summary');summary.textContent=title;
  const content=document.createElement('div');content.className='fact-content';
  const p=document.createElement('p'),q=document.createElement('p');
  const b=document.createElement('b'),c=document.createElement('b');b.textContent='Что нашли: ';c.textContent='Что сделать: ';p.append(b,document.createTextNode(before));q.append(c,document.createTextNode(after));content.append(p,q);detail.append(summary,content);$('#facts-list').append(detail);
});

beforeCards.forEach((card,index)=>{
  const button=document.createElement('button');button.className='original-thumb';button.dataset.original=index;button.setAttribute('aria-label',`Открыть исходный слайд: ${card.title}`);
  const img=document.createElement('img');img.src=`assets/${card.id}.webp`;img.alt=card.headline;img.loading='lazy';img.width=768;img.height=1024;
  const label=document.createElement('span');label.textContent=card.title;button.append(img,label);button.addEventListener('click',()=>openViewer(index,'before'));$('#originals-rail').append(button);
});

const modelNames=[
  ['Люстра потолочная светодиодная с пультом, 50 см, 120 Вт, белая матовая','Размер, мощность, управление и исполнение видны ещё в выдаче.'],
  ['Люстра потолочная светодиодная с пультом, 40 см, 70 Вт','Компактная модель отличается диаметром и мощностью, а не только названием цвета.'],
  ['Люстра потолочная RGB с Bluetooth-колонкой и пультом, 50 см, 120 Вт','Музыкальная RGB-модель названа прямо: подсветка и колонка не скрываются за оттенком корпуса.']
];
function setModel(index,focus=false){
  $('#model-name').textContent=modelNames[index][0];$('#model-reason').textContent=modelNames[index][1];$('#model-panel').setAttribute('aria-labelledby',`model-${index}`);
  $$('[data-model]').forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;if(focus&&i===index)b.focus();});
}
$$('[data-model]').forEach((b,i)=>{b.addEventListener('click',()=>setModel(i));b.addEventListener('keydown',e=>{let n=i;if(e.key==='ArrowRight')n=(i+1)%3;else if(e.key==='ArrowLeft')n=(i+2)%3;else if(e.key==='Home')n=0;else if(e.key==='End')n=2;else return;e.preventDefault();setModel(n,true);});});

const viewer=$('#viewer');let viewerTrigger=null,viewerItems=cards;
function renderViewer(){
  $('.viewer-body').scrollTop=0;
  const card=viewerItems[viewerCard];$('#viewer-title').textContent=card.title;$('#viewer-counter').textContent=`${viewerCard+1} / ${viewerItems.length}`;
  const img=$('#viewer-image');img.src=card.src||`assets/${card.id}.webp`;img.alt=card.headline;
  $('#viewer-description').textContent=card.done;$('#viewer-why').textContent=card.why;$('#viewer-note').textContent=card.note;
  $('#viewer-section').textContent=viewerItems===researchCards?'Что видно у конкурента':viewerItems===beforeCards?'Что было на слайде':'Что сделано';
  $('#viewer-bottom-label').textContent=viewerItems===researchCards?'Конкуренты · исходные обложки':viewerItems===beforeCards?'Исходные материалы · 10 слайдов':'Новая галерея · рекомендуемый порядок';
  $('#viewer-prev').disabled=viewerCard===0;$('#viewer-next').disabled=viewerCard===viewerItems.length-1;
  $('#viewer-mobile-prev').disabled=viewerCard===0;$('#viewer-mobile-next').disabled=viewerCard===viewerItems.length-1;
}
function openViewer(index,kind='after'){
  viewerTrigger=document.activeElement;viewerItems=kind==='research'?researchCards:kind==='before'?beforeCards:cards;viewerCard=index;renderViewer();$('.viewer-body').scrollTop=0;
  if(!viewer.open)viewer.showModal();document.body.style.overflow='hidden';$('#viewer-close').focus();
}
async function closeViewer(){
  if(document.fullscreenElement){try{await document.exitFullscreen();}catch{}}
  viewer.close();
}
viewer.addEventListener('close',()=>{document.body.style.overflow='';if(viewerTrigger?.isConnected)viewerTrigger.focus({preventScroll:true});});
viewer.addEventListener('cancel',event=>{event.preventDefault();closeViewer();});
$('#viewer-close').addEventListener('click',closeViewer);
$('#viewer-prev').addEventListener('click',()=>{if(viewerCard>0){viewerCard--;renderViewer();}});
$('#viewer-next').addEventListener('click',()=>{if(viewerCard<viewerItems.length-1){viewerCard++;renderViewer();}});
$('#viewer-mobile-prev').addEventListener('click',()=>{if(viewerCard>0){viewerCard--;renderViewer();}});
$('#viewer-mobile-next').addEventListener('click',()=>{if(viewerCard<viewerItems.length-1){viewerCard++;renderViewer();}});
viewer.addEventListener('keydown',event=>{
  if(event.key==='ArrowRight'&&viewerCard<viewerItems.length-1){event.preventDefault();viewerCard++;renderViewer();}
  if(event.key==='ArrowLeft'&&viewerCard>0){event.preventDefault();viewerCard--;renderViewer();}
});
viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeViewer();}});
$$('[data-present]').forEach(button=>button.addEventListener('click',()=>openViewer(0)));
$$('[data-open-card]').forEach(button=>button.addEventListener('click',()=>openViewer(Number(button.dataset.openCard))));
$$('[data-open-before]').forEach(button=>button.addEventListener('click',()=>openViewer(Number(button.dataset.openBefore),'before')));
$$('[data-open-research]').forEach(button=>button.addEventListener('click',()=>openViewer(Number(button.dataset.openResearch),'research')));
$('#viewer-fullscreen').addEventListener('click',async()=>{
  try{if(document.fullscreenElement)await document.exitFullscreen();else await viewer.requestFullscreen();}catch{$('#viewer-fullscreen').textContent='Используйте полноэкранный режим браузера';}
});
document.addEventListener('fullscreenchange',()=>{
  $('#viewer-fullscreen').innerHTML=document.fullscreenElement?'Выйти из полного экрана':'На весь экран <svg><use href="#expand"/></svg>';
});
if(!document.fullscreenEnabled)$('#viewer-fullscreen').hidden=true;
let touchStart=null;
$('.viewer-picture').addEventListener('touchstart',event=>{const t=event.touches[0];touchStart={x:t.clientX,y:t.clientY};},{passive:true});
$('.viewer-picture').addEventListener('touchend',event=>{if(!touchStart)return;const t=event.changedTouches[0],dx=t.clientX-touchStart.x,dy=t.clientY-touchStart.y;if(Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*1.5){if(dx<0&&viewerCard<viewerItems.length-1)viewerCard++;else if(dx>0&&viewerCard>0)viewerCard--;renderViewer();}touchStart=null;},{passive:true});

setTopic(0);setCard(0);


