const cards = [
  {id:'cover',title:'Обложка',headline:'Сначала — сам товар',intro:'Первый слайд отвечает на вопрос: что это и чем удобно.',done:'Светильник показан крупно. Вместо общего названия категории — «Свет под ваше настроение». Диаметр, регулировка яркости и пульт собраны в нижнем блоке.',why:'В выдаче покупатель быстро считывает предмет и пользу. Спокойный фон помогает заметить форму и фактуру светильника.',add:'Укоротить подпись, проверить читаемость в миниатюре и отступы под интерфейс Ozon. На обложке RGB оставить люстру, RGB и Bluetooth-колонку; остальные функции перенести дальше.',note:'Готовая дизайн-концепция из ваших материалов. Характеристики нужно подтвердить.'},
  {id:'size',title:'Размеры',headline:'Масштаб вместо догадок',intro:'Диаметр и профиль показаны рядом с интерьером.',done:'Размеры 50 × 7 см сохранены из исходника. Теперь диаметр назван прямо, профиль вынесен отдельно, а интерьер помогает представить масштаб относительно мебели.',why:'Покупателю проще понять, как светильник будет выглядеть у потолка. Слово «диаметр» устраняет ошибку «50 см — длина» из аудита.',add:'Сверить 7 см с паспортом и замером образца. Проверить, соответствует ли масштаб на визуализации реальным размерам. Отметку «диван 180 см» оставлять только при обоснованном масштабе.',note:'Размеры и масштаб на изображении — сведения из предоставленного макета, пока не подтверждённые документацией.'},
  {id:'light',title:'Сценарии света',headline:'Одна люстра — разный свет',intro:'Сохраняем четыре режима из исходника и показываем их в единой визуальной системе.',done:'Тёплый, нейтральный, холодный свет и ночник показаны в одинаковом ракурсе. Меняется свет, а не обстановка.',why:'Сравнение в одной сцене помогает увидеть разницу и связать режим со своим сценарием: отдыхом, повседневными делами или ночью.',add:'После сверки указать точные температуры и диапазон яркости. Не переносить противоречивые 3000 / 4500 / 6500 К и 5000 К из старой карточки без проверки.',note:'Фотографическая иллюстрация режимов. Цвет экрана не передаёт точную температуру и освещённость.'},
  {id:'control',title:'Управление',headline:'Удобство в одном жесте',intro:'Пульт показан в руке, а рядом — понятные действия.',done:'На одном слайде собраны регулировка яркости, выбор оттенка и ночной режим. Есть прямое указание, что пульт входит в комплект.',why:'Покупатель видит не просто аксессуар, а действия, которыми сможет пользоваться с дивана.',add:'Показать реальный пульт именно этой модели. По факту описать память настроек и поведение после выключения настенным выключателем. Таймер и приложение добавлять только при наличии.',note:'Функции и внешний вид пульта необходимо сверить с фактической комплектацией.'},
  {id:'install',title:'Установка',headline:'Всё важное — заранее',intro:'Размер и комплект собраны до момента установки.',done:'Размерные стрелки показывают 50 × 7 см. Отдельно перечислены светильник, пульт и батарейки, крепление; есть напоминание следовать инструкции.',why:'Покупатель заранее понимает, что будет в коробке и какое место нужно подготовить.',add:'Добавить крупное фото реального крепления, вид основания и комплекта. Батарейки упоминать только после проверки. Сверить тип монтажа: в аудите отмечено несоответствие поля «подвесное».',note:'Крепление, батарейки и габариты показаны в макете; для публикации требуется подтверждение.'},
  {id:'warranty',title:'Гарантия',headline:'Доверие без мелкого шрифта',intro:'Срок и способ обращения видны на одном экране.',done:'Крупное указание гарантии сохранено, добавлен понятный канал обращения — чат продавца на Ozon. Есть напоминание сохранить данные заказа.',why:'Вместо абстрактного обещания появляется конкретный следующий шаг, если возникнет вопрос.',add:'Устранить расхождение «2 года» и «25 месяцев». Подтвердить единый срок и кратко объяснить порядок обращения. До этого цифра на макете остаётся предложением, а не проверенным обязательством.',note:'«2 года» — срок на предоставленном слайде; итоговый срок устанавливается по документам продавца.'},
  {id:'models',title:'Выбор модели',headline:'Разницу видно сразу',intro:'Размер и функции помогают выбрать без расшифровки цветов.',done:'40 см, 50 см и 50 см RGB размещены рядом. Текущая модель выделена. RGB отличается цветной подсветкой и Bluetooth-колонкой.',why:'Покупатель сравнивает реальные отличия. Не нужно угадывать, почему «кремовый» вариант оказался музыкальной моделью.',add:'По возможности категории вынести размер и функции в понятные варианты. Разделить названия: обычная, компактная, RGB с колонкой. Параметры каждого варианта сверить отдельно.',note:'Различия приведены по ТЗ и предоставленному сравнительному слайду.'}
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
  {src:'assets/research/smartbuy-cover.jpg', title:'Smartbuy · 1827059716', headline:'Исходная обложка Smartbuy MEZZO', done:'На изображении заявлены 50 см, 9600 лм, 40 м² и 120 Вт. В доступном поле той же карточки указано 25 м².', why:'Слайды и поля должны опираться на один проверенный набор данных. Для iLumen подтверждаем световой поток и условия оценки площади, а не копируем числа конкурента.', note:'Изображение с Ozon Беларусь, получено 10.11.2026. Несовпадение относится к доступным материалам; версии страницы могли изменяться.'},
  {src:'assets/research/rivoli-cover.jpg', title:'Rivoli · 2969492035', headline:'Исходная обложка Rivoli 80 Вт', done:'Светильник показан в светлом интерьере. На обложке два коротких аргумента: площадь и пульт. Диаметр не указан.', why:'Для iLumen это референс интерьерной подачи. Добавляем понятный размер и проверяем вариант в тесте. 80 Вт у Rivoli не считаем эквивалентом 120 Вт у iLumen.', note:'Изображение с Ozon, получено 10.11.2026. Это новая найденная модель 80 Вт, а не неустановленная Rivoli 120 Вт из прежнего аудита.'}
];
const beforeForTopic = [0,2,null,9];
const topics = [
  {label:'Обложка карточки',card:0,title:'От категории — к пользе',before:'Огромная надпись «ЛЮСТРА СВЕТОДИОДНАЯ» забирает внимание. Часть данных попадает под элементы Ozon.',after:'Крупный товар, спокойный фон и три аргумента рядом: размер, яркость, пульт.',why:'Обложка помогает быстро понять предложение. Остальные подробности раскрываются следующими слайдами, не конкурируя друг с другом.',next:'Подготовить предметную и интерьерную обложки. Проверить обе в маленьком размере и с интерфейсом площадки.',mockTitle:'ЛЮСТРА СВЕТОДИОДНАЯ',mock:['Общее название — главный акцент','Важные надписи близко к краям']},
  {label:'Характеристики',card:1,title:'Один товар — одни данные',before:'«50 см — длина», противоречивые Кельвины, IP20 рядом с «водонепроницаемостью», спорный тип монтажа.',after:'На новом слайде показаны диаметр и профиль. Для всех полей нужен единый набор подтверждённых характеристик.',why:'Когда слайд, описание и характеристики говорят одно и то же, покупателю не приходится решать, какая версия верна.',next:'Сначала сверить с паспортом температуру, IP, монтаж и размеры. Затем синхронно обновить текст, поля и инфографику.',mockTitle:'Каким данным верить?',mock:['На слайде: 3000 / 4500 / 6500 К','В характеристиках: 5000 К','IP20 + «водонепроницаемость»']},
  {label:'Выбор модели',card:6,title:'Выбор по смыслу',before:'Семь люстр с одинаковым общим названием. Варианты подписаны цветами, хотя различаются размером и функциями.',after:'Сравнительный слайд показывает 40 см, 50 см и RGB с колонкой. Для каждой модели — отдельное информативное название.',why:'Покупатель видит принципиальную разницу ещё до заказа. Функциональность перестаёт скрываться за названием оттенка.',next:'Разделить названия обычной, компактной и RGB-модели; при возможности изменить подписи вариантов. Не объединять разные характеристики в одно обещание.',mockTitle:'Цвет или другая модель?',mock:['Белый / слоновая кость / кремовый','Одно название для разных функций','RGB-модель не выделена названием']},
  {label:'Доверие к карточке',card:5,title:'Обещание с понятным шагом',before:'В описании встречается Smartbuy, абзацы повторяются. На обложке 2 года гарантии, в полях — 25 месяцев. На добавленном исходном слайде «Технологии» есть значок «Гарантия 5 лет».',after:'Визуальная система iLumen и отдельный слайд об обращении в чат продавца. Срок гарантии ещё нужно согласовать.',why:'Последовательность бренда и понятный порядок обращения поддерживают доверие. Крупная цифра полезна только тогда, когда она верна.',next:'Проверить фактический бренд, убрать повторы, подтвердить срок гарантии. Описать порядок обращения и привести к одному виду все блоки.',mockTitle:'Два бренда. Два срока.',mock:['iLumen в карточке / Smartbuy в описании','2 года на обложке / 25 месяцев в полях','Повторяющиеся абзацы']}
];

const facts = [
  ['Бренд и описание','В описании дважды встречается Smartbuy и повторяются абзацы.','Сверить фактический бренд. При ошибке копирования убрать чужое название; описание заменить конкретикой: размер, свет, управление, монтаж и комплект.'],
  ['Температура света','На втором слайде 3000 / 4500 / 6500 К, в характеристиках — 5000 К.','Проверить паспорт и реальный образец. Указать одинаковые значения во всех полях и изображениях; сейчас не выбирать одно из чисел наугад.'],
  ['IP и условия использования','Одновременно указаны IP20 и «водонепроницаемость».','Проверить документацию. Удалить неподтверждённое свойство и корректно описать допустимые условия использования.'],
  ['Монтаж и комплект','В поле стоит «подвесное», хотя светильник визуально прилегает к потолку. На новом макете есть батарейки.','Подтвердить тип крепления, показать основание и фактический комплект. Убрать батарейки из текста, если их нет в поставке.'],
  ['Срок гарантии','В аудите: 2 года на обложке и 25 месяцев в характеристиках. В добавленных исходниках на слайде «Технологии» найден значок «Гарантия 5 лет».','Выяснить, к чему относится каждый срок, подтвердить гарантию по документам и устранить неоднозначность во всех блоках. Макет с «2 года» сам по себе не подтверждает обязательство.'],
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


