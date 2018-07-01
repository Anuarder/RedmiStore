
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
		"Price":"200.000тг",
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
		"Price":"132.000тг",
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
		"Price":"93.000тг",
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
		"Price":"62.000тг",
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
		"Price":"68.000тг",
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
		"Price":"77.000тг",
		"File":"./media/MiPlus5.jpg"
	},
];

let vm = new Vue({
	el: "#app",
	data:{
		classes: {
			isCollapsed: true,
			viewActive: 1,
		},
		miData: miData,
		shoppingCart:{
			count: 2,
			items: '',
			Price: 54524
		}
	},
	methods:{
		collapseToggle(){
			this.classes.isCollapsed = !this.classes.isCollapsed;
		},
		viewActiveToggle(id){
			this.classes.viewActive = id;
		},
	}
});