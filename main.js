
const deck = ['RD1','RD2','RD3','RD4','RD5','RD6','RD7','RD8','RD9','RDA','RDJ','RDK','RDQ',
'RH1','RH2','RH3','RH4','RH5','RH6','RH7','RH8','RH9','RHA','RHJ','RHK','RHQ',
'BS1','BS2','BS3','BS4','BS5','BS6','BS7','BS8','BS9','BSA','BSJ','BSK','BSQ',
'BC1','BC2','BC3','BC4','BC5','BC6','BC7','BC8','BC9','BCA','BCJ','BCK','BCQ'];

for(let j=deck.length-1;j>0;j--){
let val = Math.floor(Math.random()*(j+1));
[deck[j],deck[val]] = [deck[val],deck[j]];
}
for (let i=0,k=0;i<4;i++){
    document.getElementsByTagName('body')[0].innerHTML+="<div class='decks'></div>";
    for (let j=0;j<13;j++,k++){
        document.getElementsByClassName('decks')[i].innerHTML+='<img>';
        document.getElementsByTagName('img')[k].src="images/cards/"+deck[k]+".png";
    }
}
