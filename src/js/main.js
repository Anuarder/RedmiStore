
let miData = [
	{
		"id":"0",
		"Model":"Xiaomi MI Mix 2",
		"Weight":"185г",
		"CPU":"Qualcomm Snapdragon 835",
		"Screen-type":"IPS LCD",
		"Screen-size":"5,99",
		"Screen-resolution":"2160x1080",
		"GPU":"Adreno 540",
		"RAM":"6 Гб",
		"ROM":"64 Гб",
		"Camera":{
			"Primary":"12 МП, F/2.0",
			"Secondary":"5 МП"
		},
		"Video":"3840x2160 (4K)",
		"COMMS":"Wi-Fi 802.11ac, Wi-Fi Direct, Bluetooth 5.0, IRDA, USB, NFC",
		"Count":"2",
		"Price":"200000",
		"File":"./media/Mix2.jpg"
	},
	{
		"id":"1",
		"Model":"Xiaomi MI Note 2",
		"Weight":"166г",
		"CPU":"Qualcomm Snapdragon 821",
		"Screen-type":"OLED",
		"Screen-size":"5,7",
		"Screen-resolution":"1920*1080",
		"GPU":"Adreno 530",
		"RAM":"6 Гб",
		"ROM":"128 Гб",
		"Camera":{
			"Primary":"22 МП, F/2.0",
			"Secondary":"8 МП"
		},
		"Video":"3840x2160 (4K)",
		"COMMS":"Wi-Fi 802.11ac, Wi-Fi Direct, Bluetooth 5.0, IRDA, USB, NFC",
		"count":"8",
		"Price":"132000",
		"File":"./media/MiNote2.jpg"
	},
	{
		"id":"2",
		"Model":"Redmi Note 5",
		"Weight":"181г",
		"CPU":"Qualcomm Snapdragon 836",
		"Screen-type":"IPS",
		"Screen-size":"5,99",
		"Screen-resolution":"2160х1080",
		"GPU":"Adreno 509",
		"RAM":"6 Гб",
		"ROM":"128 Гб",
		"Camera":{
			"Primary":"12+5 МП, F/2.0",
			"Secondary":"13 МП"
		},
		"Video":"3840x2160 (4K)",
		"COMMS":"Wi-Fi 802.11ac, Wi-Fi Direct, Bluetooth 5.0, IRDA, USB, NFC",
		"count":"11",
		"Price":"93000",
		"File":"./media/MiNote5.jpg"
	},
	{
		"id":"3",
		"Model":"Redmi Note 4",
		"Weight":"165г",
		"CPU":"Qualcomm Snapdragon 625",
		"Screen-type":"IPS",
		"Screen-size":"5,5",
		"Screen-resolution":"1920*1080",
		"GPU":"Adreno 506",
		"RAM":"4 Гб",
		"ROM":"64 Гб",
		"Camera":{
			"Primary":"13 МП, F/2.2",
			"Secondary":"5 МП"
		},
		"Video":"1920*1080",
		"COMMS":"Wi-Fi 802.11ac, Wi-Fi Direct, Bluetooth 5.0, IRDA, USB, NFC",
		"count":"3",
		"Price":"62000",
		"File":"./media/MiNote4.jpg"
	},
	{
		"id":"4",
		"Model":"Xiaomi Mi A1",
		"Weight":"165г",
		"CPU":"Qualcomm Snapdragon 625",
		"Screen-type":"IPS",
		"Screen-size":"5,5",
		"Screen-resolution":"1920*1080",
		"GPU":"Adreno 506",
		"RAM":"4 Гб",
		"ROM":"64 Гб",
		"Camera":{
			"Primary":"12+12 МП, F/2.2",
			"Secondary":"5 МП"
		},
		"Video":"3840x2160 (4K)",
		"COMMS":"Wi-Fi 802.11ac, Wi-Fi Direct, Bluetooth 5.0, IRDA, USB, NFC",
		"count":"5",
		"Price":"68000",
		"File":"./media/MiA1.jpg"
	},
	{
		"id":"5",
		"Model":"Xiaomi Redmi 5 Plus",
		"Weight":"180г",
		"CPU":"Qualcomm Snapdragon 625",
		"Screen-type":"IPS",
		"Screen-size":"5,99",
		"Screen-resolution":"2160х1080",
		"GPU":"Adreno 506",
		"RAM":"4 Гб",
		"ROM":"64 Гб",
		"Camera":{
			"Primary":"12 МП, F/2.2",
			"Secondary":"5 МП"
		},
		"Video":"1920*1080",
		"COMMS":"Wi-Fi 802.11ac, Wi-Fi Direct, Bluetooth 5.0, IRDA, USB, NFC",
		"count":"13",
		"Price":"77000",
		"File":"./media/MiPlus5.jpg"
	},
];

let vm = new Vue({
	el: "#app",
	data:{
		orderData: {
			name: '',
			address: '',
			phone: ''
		},
		classes: {
			isCollapsed: true,
			viewActive: 1,
		},
		miData: miData,
		shoppingCart:{
			items: [],
			count: 0,
			price: 0
		}
	},
	methods:{
		collapseToggle(){
			this.classes.isCollapsed = !this.classes.isCollapsed;
		},
		viewActiveToggle(id){
			this.classes.viewActive = id;
		},
		showCharacteristics(id){
			event.preventDefault();
			let modalContent = document.createElement("div");
			modalContent.innerHTML = `
			<img src="${this.miData[id].File}" class="img-fluid">
			<p class="lead">Характеристики</p>
			<table class="table table-striped">
			  <tr>
				<td>Модель</td>
				<td>${this.miData[id].Model}</td>
			  </tr>
			  <tr>
				<td>Вес</td>
				<td>${this.miData[id].Weight}</td>
			  </tr>
			  <tr>
				<td>Процессор</td>
				<td>${this.miData[id].CPU}</td>
			  </tr>
			  <tr>
				<td>Видеокарта</td>
				<td>${this.miData[id].GPU}</td>
			  </tr>
			  <tr>
				<td>Размер экрана</td>
				<td>${this.miData[id]['Screen-size']}</td>
			  </tr>
			  <tr>
				<td>Тип экрана</td>
				<td>${this.miData[id]['Screen-type']}</td>
			  </tr>
			  <tr>
				<td>Оперативная память</td>
				<td>${this.miData[id].RAM}</td>
			  </tr>
			  <tr>
				<td>Постоянная память</td>
				<td>${this.miData[id].ROM}</td>
			  </tr>
			  <tr>
				<td>Основная камера</td>
				<td>${this.miData[id].Camera.Primary}</td>
			  </tr>
			  <tr>
				<td>Фронтальная камера</td>
				<td>${this.miData[id].Camera.Secondary}</td>
			  </tr>
			  <tr>
				<td>Видео</td>
				<td>${this.miData[id].Video}</td>
			  </tr>
			</table>
			`;
			swal({
				content: modalContent
			});
		},
		addToCart(id){
			event.preventDefault();
			if(_.isEmpty(this.shoppingCart.items)){
				this.pushToCart(id);
			}else{
				let findElem = _.findKey(this.shoppingCart.items, (el) =>{ return el.id == id; });
				if(findElem !== undefined){
					this.shoppingCart.items[findElem].price += parseInt(this.miData[findElem].Price);
					this.shoppingCart.items[findElem].count++;
					this.showCartNotify(id);
				}else{
					this.pushToCart(id);
				}
			}
		},
		pushToCart(id){
			this.shoppingCart.items.push({
				id: this.miData[id].id,
				model: this.miData[id].Model,
				price: parseInt(this.miData[id].Price),
				count: 1
			});
			this.showCartNotify(id);
		},
		showCartNotify(id){
			swal({
				icon: "success",
				title: this.miData[id].Model,
				text: "Добавлен в корзину"
			  });
			this.shoppingCart.count ++;
			this.shoppingCart.price += parseInt(this.miData[id].Price);
		},
		buyNow(id){
			this.addToCart(id);
			this.checkoutOrder();
		},
		checkoutOrder(){
			this.classes.viewActive = 3;
			this.classes.isCollapsed = true;
		},
		order(){
			swal({
				icon: "success",
				title: "Заказ обработан"
			});
			console.log("Товары")
			this.shoppingCart.items.forEach(element => {
				console.log(`Модель: ${element.model}, Кол-во: ${element.count}, Цена: ${element.price}\n`);
			});
			console.log(`Количество товаров: ${this.shoppingCart.count}`)
			console.log(`Общая цена: ${this.shoppingCart.price}`)
			console.log(`Данные заказчика\nИмя: ${this.orderData.name}\nАдрес: ${this.orderData.address}\nТелефон: ${this.orderData.phone}`);
		}
	}
});