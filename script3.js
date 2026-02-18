const slideUrl = new Array(
  'url(file:///C:/Users/jorda/Desktop/%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D1%8F/01.jpeg)',
  'url(file:///C:/Users/jorda/Desktop/%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D1%8F/02.jpeg)',
  'url(file:///C:/Users/jorda/Desktop/%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D1%8F/03.jpeg)'
);

var numArray = 1;

const guard = new Array(0, 1, 1, 1);
const guardInner = new Array(0, 0, 0, 0);

var slideDate = +new Date() + 3000;

const slideSetting = new Array(1, 2, 3, 0);

var slideTime = 3500;

var slideIf = 0;
var slideIfInner = 0;

const slideObj = new Object({

'00': `--sld1:` + slideUrl[0] +  `; --sld2:` + slideUrl[1] + `; --sld3: 0;`,
'01': `--sld1:` + slideUrl[1] +  `; --sld2:` + slideUrl[0] + `; --sld3: 1;`,

'10': `--sld1:` + slideUrl[2] +  `; --sld2:` + slideUrl[1] + `; --sld3: 1;`,
'11': `--sld1:` + slideUrl[1] +  `; --sld2:` + slideUrl[2] + `; --sld3: 0;`,

'20': `--sld1:` + slideUrl[2] +  `; --sld2:` + slideUrl[0] + `; --sld3: 0;`,
'21': `--sld1:` + slideUrl[0] +  `; --sld2:` + slideUrl[2] + `; --sld3: 1;`

});



function slideBtn(a) {

slideIf = 1;
/*
document.getElementById('subheader-body').style.cssText = slideObj[String(a) + String(numArray)];
*/
  if ( Number(a) == 0 ) {
    document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 1;`;
    document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 0;`;
    document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 0;`;
    document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 0;`;
  } else if ( Number(a) == 1 ) {
    document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 0;`;
    document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 1;`;
    document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 0;`;
    document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 0;`;
  } else if ( Number(a) == 2) {
    document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 0;`;
    document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 0;`;
    document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 1;`;
    document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 0;`;
  } else if ( Number(a) == 3) {
    document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 0;`;
    document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 0;`;
    document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 0;`;
    document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 1;`;
  }


/* 17.02.26 del-time
document.getElementById('empty-absolute').getElementsByTagName('span')[0].style.cssText = `background-position: 100% 0%`;
document.getElementById('empty-absolute').getElementsByTagName('span')[1].style.cssText = `background-position: 100% 50%`;
document.getElementById('empty-absolute').getElementsByTagName('span')[2].style.cssText = `background-position: 100% 100%`;

document.getElementById('empty-absolute').getElementsByTagName('span')[a].style.cssText = `background-position: 0% ${ a == 0 ? "0" : a == 1 ? "50" : "100" }%`;
*/

console.log('A');
slideIfInner += 1;
// if ( slideIfInner == 1 ) { numArray = a == 0 && numArray == 0 ? 1 : a == 0 && numArrray == 1 ? 0 : numArray; }
if ( slideIfInner == 1 ) {
	a == 0 && numArray == 0 ? numArray = 1 : a == 0 && numArrray == 1 ? numArray = 0 : numArray = numArray;
}

	setTimeout(() => {

if ( slideIfInner == 1 ) {

console.log('B');

// numArray = a == 0 && numArray == 0 ? 1 : a == 0 && numArrray == 1 ? 0 : numArray;


//  slideDate = +new Date() + 1000;
		guardInner[0] = 0, guardInner[1] = 0, guardInner[2] = 0;


		for ( let i = 0; i < guard.length; i++ ) {
			if ( a == i ) { guard[i] = 0;
			} else { guard[i] = 1; }
		}


//	guardInner[a] = 1;

// slideTime = 1500;

		slideIf = 0;
slideIfInner -= 1;
		slide();

} else {

slideIfInner -= 1;

}

	}, 7500);

}


function slide() {

// if ( slideIf == 0 ) {

setTimeout(() => {

if ( slideIf == 0 ) {

	if ( guard[0] == 0 ) {



/* ***********************
START 1
************************** */

		if ( guardInner[0] == 0 && slideDate <= +new Date() ) {
			if ( numArray == 1) { numArray = 0 } else { numArray = 1; }
/* 17.02.26
			if ( numArray == 0 ) { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[0] +  `; --sld2:` + slideUrl[1] + `; --sld3: 0;`;
			} else { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[1] +  `; --sld2:` + slideUrl[0] + `; --sld3: 1;`; }
*/
if ( numArray == 0 ) {
  document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 1;`;
  document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 0;`;
} else {
/*  document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[1] +  `; --sld2:` + slideUrl[0] + `; --sld3: 1;`;*/
  document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 1;`;
  document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 0;`;

}



			guardInner[0] = 1;

			slideDate = +new Date() + 1500;
console.log('S1');
			slideTime = 1500;
			slide();

		} else if ( slideDate <= +new Date() ) {
/*
			if ( numArray == 0 ) { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[0] +  `; --sld2:` + slideUrl[1] + `; --sld3: 1;`;
			} else { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[1] +  `; --sld2:` + slideUrl[0] + `; --sld3: 0;`; }
*/
if ( numArray == 0 ) {
  document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 1;`;
  document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 0;`;
} else {
  document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 1;`;
  document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 0;`;
}

/* 17.02.26 del-time
document.getElementById('subheader-body').getElementsByTagName('span')[0].style.cssText = `background-position: 100% 0%`;
document.getElementById('subheader-body').getElementsByTagName('span')[1].style.cssText = `background-position: 0% 50%`;
*/

			guardInner[0] = 0;

			guard[0] = 1;
			guard[slideSetting[0]] = 0

			slideDate = +new Date() + 3500;
console.log('E1');
			slideTime = 3500;
			slide();

		}
/* **********************
EXIT 1
************************* */

/* *************************
START 1
**************************** */

	} else if ( guard[1] == 0 ) {
                if ( guardInner[1] == 0 && slideDate <= +new Date() ) {
/*
			if ( numArray == 0 ) { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[2] +  `; --sld2:` + slideUrl[1] + `; --sld3: 1;`;
			} else { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[1] +  `; --sld2:` + slideUrl[2] + `; --sld3: 0;`; }
*/
if ( numArray == 0 ) {

  document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 1;`;
  document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 0;`;
} else {

  document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 1;`;
  document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 0;`;
}



			guardInner[1] = 1;

			slideDate = +new Date() + 1500;
console.log('S2');
			slideTime = 1500;
			slide();

                } else if ( slideDate <= +new Date() ) {
/*
			if ( numArray == 0 ) { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[2] +  `; --sld2:` + slideUrl[1] + `; --sld3: 0;`;
			} else { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[1] +  `; --sld2:` + slideUrl[2] + `; --sld3: 1;`; }
*/
  if ( numArray == 0 ) {

    document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 0;`;
    document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 0;`;
    document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 1;`;
    document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 0;`;
  } else {

    document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 0;`;
    document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 0;`;
    document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 1;`;
    document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 0;`;
  }


/* 17.02.26 del-time
document.getElementById('empty-absolute').getElementsByTagName('span')[1].style.cssText = `background-position: 100% 50%`;
document.getElementById('empty-absolute').getElementsByTagName('span')[2].style.cssText = `background-position: 0% 100%`;
*/

			guardInner[1] = 0;

                        guard[1] = 1;
                        guard[slideSetting[1]] = 0

			slideDate = +new Date() + 3500;
console.log('E2');
			slideTime = 3500;
			slide();

                }
/* *******************************
EXIT 2
********************************** */

/* *******************************
START 3
********************************** */

	} else if ( guard[2] == 0 ) {
                if ( guardInner[2] == 0 && slideDate <= +new Date() ) {
/*
			if ( numArray == 0 ) { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[2] +  `; --sld2:` + slideUrl[0] + `; --sld3: 0;`;
			} else { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[0] +  `; --sld2:` + slideUrl[2] + `; --sld3: 1;`; }
*/
if ( numArray == 0 ) {
  document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 1;`;
  document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 0;`;
} else {

  document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 1;`;
  document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 0;`;
}


			guardInner[2] = 1;

			slideDate = +new Date() + 1500;
console.log('S3');
			slideTime = 1500;
			slide();

                } else if ( slideDate <= +new Date() ) {


                  if ( numArray == 0 ) {

                    document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 0;`;
                    document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 0;`;
                    document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 0;`;
                    document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 1;`;
                  } else {

                    document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 0;`;
                    document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 0;`;
                    document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 0;`;
                    document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 1;`;
                  }


                /* 17.02.26 del-time
                document.getElementById('empty-absolute').getElementsByTagName('span')[1].style.cssText = `background-position: 100% 50%`;
                document.getElementById('empty-absolute').getElementsByTagName('span')[2].style.cssText = `background-position: 0% 100%`;
                */

                			guardInner[2] = 0;

                                        guard[2] = 1;
                                        guard[slideSetting[2]] = 0

                			slideDate = +new Date() + 3500;
                console.log('E2');
                			slideTime = 3500;
                			slide();

                                }

/* *************************************
EXIT 3
**************************************** */
} else if ( guard[3] == 0 ) {
              if ( guardInner[3] == 0 && slideDate <= +new Date() ) {
/* *************************************
START 4
**************************************** */
/*
			if ( numArray == 0 ) { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[2] +  `; --sld2:` + slideUrl[1] + `; --sld3: 0;`;
			} else { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[1] +  `; --sld2:` + slideUrl[2] + `; --sld3: 1;`; }
*/



                /*
                      if ( numArray == 0 ) { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[2] +  `; --sld2:` + slideUrl[0] + `; --sld3: 0;`;
                      } else { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[0] +  `; --sld2:` + slideUrl[2] + `; --sld3: 1;`; }
                */
                if ( numArray == 0 ) {
                  document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 0;`;
                  document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 0;`;
                  document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 0;`;
                  document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 1;`;
                } else {

                  document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 0;`;
                  document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 0;`;
                  document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 0;`;
                  document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 1;`;
                }


                      guardInner[3] = 1;

                      slideDate = +new Date() + 1500;
                console.log('S3');
                      slideTime = 1500;
                      slide();






    } else if ( slideDate <= +new Date() ) {
/* ************************************************
EXIT 4
*************************************************** */

/*
			if ( numArray == 0 ) { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[2] +  `; --sld2:` + slideUrl[0] + `; --sld3: 1;`;
			} else { document.getElementById('subheader-body').style.cssText = `--sld1:` + slideUrl[0] +  `; --sld2:` + slideUrl[2] + `; --sld3: 0;`; }
*/
if ( numArray == 0 ) {
  document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 1;`;
  document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 0;`;
} else {
  document.getElementsByClassName('portfolio-wrap')[0].style.cssText = `opacity: 1;`;
  document.getElementsByClassName('portfolio-wrap')[1].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[2].style.cssText = `opacity: 0;`;
  document.getElementsByClassName('portfolio-wrap')[3].style.cssText = `opacity: 0;`;
}

/* 17.02.23 del-time
document.getElementById('empty-absolute').getElementsByTagName('span')[2].style.cssText = `background-position: 100% 100%`;
document.getElementById('empty-absolute').getElementsByTagName('span')[0].style.cssText = `background-position: 0% 0%`;
*/
			guardInner[3] = 0;

                        guard[3] = 1;
                        guard[slideSetting[3]] = 0

			slideDate = +new Date() + 3500;
console.log('E3');
			slideTime = 3500;
			slide();

                }
	}
} else { // slideIf
console.log('CC');
}

}, slideTime);

// } // slideIf

}

slide();
