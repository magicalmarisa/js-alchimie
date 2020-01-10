"use strict";
function calculate() {
	var mu = parseInt(document.getElementById("mu").value,10);
	if (isNaN(mu) || mu < 1 || mu > 30) { mu = 12; }
	var kl = parseInt(document.getElementById("kl").value,10);
	if (isNaN(kl) || kl < 1 || kl > 30) { kl = 12; }
	var ff = parseInt(document.getElementById("ff").value,10);
	if (isNaN(ff) || ff < 1 || ff > 30) { ff = 12; }
	var taw = parseInt(document.getElementById("taw").value,10);
	if (isNaN(taw) || taw < 0 || taw > 35) { taw = 12; }
	var bs = parseInt(document.getElementById("bs").value,10);
	if (isNaN(bs) || bs < 0 || bs > 35) { bs = 0; }
	var fw = parseInt(document.getElementById("fw").value,10);
	if (isNaN(fw) || fw < 0 || fw > 35) { fw = 0; }
	var mod = parseInt(document.getElementById("mod").value,10);
	if (isNaN(mod)) { mod = 0; }
	var qbon = parseInt(document.getElementById("qbon").value,10);
	if (isNaN(qbon) || qbon < 0 || qbon > 35) { qbon = 0; }
	var tapstern = tapsternliste(mu,kl,ff,taw,bs+fw+mod);
	var quallists=[]
	for (var i=2; i<13;i++){
		quallists.push([])
		for (const x of tapstern){
			if (x>0){
				quallists[i-2].push(x+i+2*fw+qbon);
			} else if (x==0){
				quallists[i-2].push(x+i+2*fw+qbon+1);
			}else{
				quallists[i-2].push(x);
			}
		}
	}
	var alle_qualpts = quallists[0].concat(quallists[1],quallists[1],quallists[2],quallists[2],quallists[2],quallists[3],quallists[3],quallists[3],quallists[3],quallists[4],quallists[4],quallists[4],quallists[4],quallists[4],quallists[5],quallists[5],quallists[5],quallists[5],quallists[5],quallists[5],quallists[6],quallists[6],quallists[6],quallists[6],quallists[6],quallists[7],quallists[7],quallists[7],quallists[7],quallists[8],quallists[8],quallists[8],quallists[9],quallists[9],quallists[10]);
	
	var quals=[0,0,0,0,0,0,0];
	for (const x of alle_qualpts){
		if(x>30){
			quals[6]++;
		}else if(x>24){
			quals[5]++;
		}else if(x>18){
			quals[4]++;
		}else if(x>12){
			quals[3]++;
		}else if(x>6){
			quals[2]++;
		}else if(x<0){
			quals[0]++;
		}else{
			quals[1]++;
		}
	}
	document.getElementById("qualM").innerHTML = (quals[0]/80/36).toFixed(2)+"%";
	document.getElementById("qualA").innerHTML = (quals[1]/80/36).toFixed(2)+"%";
	document.getElementById("qualB").innerHTML = (quals[2]/80/36).toFixed(2)+"%";
	document.getElementById("qualC").innerHTML = (quals[3]/80/36).toFixed(2)+"%";
	document.getElementById("qualD").innerHTML = (quals[4]/80/36).toFixed(2)+"%";
	document.getElementById("qualE").innerHTML = (quals[5]/80/36).toFixed(2)+"%";
	document.getElementById("qualF").innerHTML = (quals[6]/80/36).toFixed(2)+"%";
	
	//document.getElementById("qualMplus").innerHTML = ((quals[0]+quals[1]+quals[2]+quals[3]+quals[4]+quals[5]+quals[6])/80/36).toFixed(2)+"%";
	document.getElementById("qualAplus").innerHTML = ((quals[1]+quals[2]+quals[3]+quals[4]+quals[5]+quals[6])/80/36).toFixed(2)+"%";
	document.getElementById("qualBplus").innerHTML = ((quals[2]+quals[3]+quals[4]+quals[5]+quals[6])/80/36).toFixed(2)+"%";
	document.getElementById("qualCplus").innerHTML = ((quals[3]+quals[4]+quals[5]+quals[6])/80/36).toFixed(2)+"%";
	document.getElementById("qualDplus").innerHTML = ((quals[4]+quals[5]+quals[6])/80/36).toFixed(2)+"%";
	document.getElementById("qualEplus").innerHTML = ((quals[5]+quals[6])/80/36).toFixed(2)+"%";
	document.getElementById("qualFplus").innerHTML = (quals[6]/80/36).toFixed(2)+"%";
	params.set('mu', mu);
	params.set('kl', kl);
	params.set('ff', ff);
	params.set('taw', taw);
	params.set('mod', mod);
	params.set('bs', bs);
	params.set('fw', fw);
	params.set('qbon', qbon);
	window.history.replaceState({}, '', `${location.pathname}?${params}`);
}
function initialisierung() {
	const params = new URLSearchParams(location.search);
	if (params.has('mu')) {document.getElementById("mu").value=params.get('mu');}
	if (params.has('kl')) {document.getElementById("kl").value=params.get('kl');}
	if (params.has('ff')) {document.getElementById("ff").value=params.get('ff');}
	if (params.has('taw')) {document.getElementById("taw").value=params.get('taw');}
	if (params.has('mod')) {document.getElementById("mod").value=params.get('mod');}
	if (params.has('bs')) {document.getElementById("bs").value=params.get('bs');}
	if (params.has('fw')) {document.getElementById("fw").value=params.get('fw');}
	if (params.has('qbon')) {document.getElementById("qbon").value=params.get('qbon');}
	calculate()
}