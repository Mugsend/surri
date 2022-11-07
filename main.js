
const deck = ['RDA','RD2','RD3','RD4','RD5','RD6','RD7','RD8','RD9','RD10','RDJ','RDK','RDQ',
'RHA','RH2','RH3','RH4','RH5','RH6','RH7','RH8','RH9','RH10','RHJ','RHK','RHQ',
'BSA','BS2','BS3','BS4','BS5','BS6','BS7','BS8','BS9','BS10','BSJ','BSK','BSQ',
'BCA','BC2','BC3','BC4','BC5','BC6','BC7','BC8','BC9','BC10','BCJ','BCK','BCQ'];

for(let j=deck.length-1;j>0;j--){
let val = Math.floor(Math.random()*(j+1));
[deck[j],deck[val]] = [deck[val],deck[j]];
}
for (let i=0,k=0;i<4;i++){
    document.getElementsByTagName('body')[0].innerHTML+="<div class='decks'></div>";
    for (let j=0;j<13;j++,k++){
        document.getElementsByClassName('decks')[i].innerHTML+='<img>';
        document.getElementsByTagName('img')[k].src="PNG-cards-1.3/"+deck[k]+".png";
    }
}
