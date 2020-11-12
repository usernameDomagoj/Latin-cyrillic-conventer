const glag = document.querySelector('.glag');
const cyr = document.querySelector('.cyr');
const alphabetButton = document.querySelector('.alphabet');
const clearButton = document.querySelector('.clear');

const alphabetObj = {'DŽ':'Џ', 'NJ':'Њ', 'LJ':'Љ', 'Dž':'Џ', 'Lj':'Љ', 'Nj':'Њ', 'a':'a', 'b':'б', 'c':'ц',
			'č':'ч', 'ć':'ћ', 'd':'д', 'dž':'џ', 'đ':'ђ', 'e':'е', 'f':'ф', 'g':'г', 'h':'х', 'i':'и',
			'j':'ј', 'k':'к', 'l':'л', 'lj':'љ', 'm':'м', 'n':'н', 'nj':'њ', 'o':'о', 'p':'п', 'r':'р',
			's':'с', 'š':'ш', 't':'т', 'u':'у', 'v':'в', 'z':'з', 'ž':'ж', 'A':'А', 'B':'Б', 'C':'Ц',
			'Č':'Ч', 'Ć':'Ћ', 'D':'Д', 'Đ':'Ђ', 'E':'Е', 'F':'Ф', 'G':'Г', 'H':'Х', 'I':'И', 'J':'Ј',
			'K':'К', 'L':'Л', 'M':'М', 'N':'Н', 'O':'О', 'P':'П', 'R':'Р', 'S':'С', 'Š':'Ш', 'T':'Т',
			'U':'У', 'V':'В', 'Z':'З', 'Ž':'Ж'
};

//functions
const alphabet = (e) => {
	let pattern = 'a, b, c, č, ć, d, dž, đ, e, f, g, h, i, j, k, l, lj, m, n, nj, o, p, r, s, š, t, u, v, z, ž';
	e.shiftKey ? glag.value = pattern.toUpperCase() : glag.value = pattern;
};

const replaceLatin = (glagVal, alphabetObj) => {
    let re = new RegExp(Object.keys(alphabetObj).join("|"),"gi");

    return glagVal.replace(re, matched => {
        return alphabetObj[matched];
    });
};

const combinedReplace = () => {
	let glagVal = glag.value;
	cyr.value = replaceLatin(glagVal, alphabetObj);
};

//eventListeners
glag.addEventListener('keyup', combinedReplace);

clearButton.addEventListener('click', () => {
	glag.value = cyr.value = null;
});

alphabetButton.addEventListener('click', (e) => {
	alphabet(e);
	combinedReplace();
});


///testing...
function arabicToRoman(number){
	let roman = "";
	const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
	let a;
	if(number < 1 || number > 3999)
	  return "Enter a number between 1 and 3999";
	else{
	  for(let key in romanNumList){
		  a = Math.floor(number / romanNumList[key]);
		  if(a >= 0){
			  for(let i = 0; i < a; i++){
				roman += key;
			  }
			}
		  number = number % romanNumList[key];
	  }
	}
  
	return roman;
  }

  console.log(arabicToRoman(1990));