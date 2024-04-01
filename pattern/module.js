/**
 * 자바스크립트에서 모듈을 만드는 방법
 */


//1. Object Literal
var module = {
    name : "module1",
    do : function () {
        console.log("module1이 동작합니다.");
    }
}

module.do();
/*
*  가장 간단한 형태
*  but 보안에 취약한 형태 
*  -> 브라우저에서 사용자에게 직접 노출되기 때문에 보안에 취약 
*  -> 글로벌 영역에 변수를 선언하는 것을 되도록 피해야한다.
*/

// 익명함수 사용
const zalot = (function () {  
    let hp = 0;   
    return {    
        takeDamage: function (damage) {
            console.log(damage+"만큼 피격당함");
            hp -= damage;    
        },
        heal: function () {
            console.log("힐~~~");
            hp = 100;
            return hp;    
        },
        state: function () {
            console.log("zalot hp = " + hp);
        }  
      }
    })();

zalot.takeDamage(50);
zalot.state();
zalot.heal();
zalot.state();

/**
 * 하지만 질럿이 여러마리가 필요할 경우 여러번 작성해줘야 한다.
 */

//생성 함수 생성 
function createZalot () {
    const zalot = (function () {  
        let hp = 0;   
        return {    
            takeDamage: function (damage) {
                console.log(damage+"만큼 피격당함");
                hp -= damage;    
            },
            heal: function () {
                console.log("힐~~~");
                hp = 100;
                return hp;    
            },
            state: function () {
                console.log("zalot hp = " + hp);
            }  
          }
        })();

    return zalot;
}

console.log("-----------------------");
let cZalot = createZalot();
cZalot.takeDamage("20");
cZalot.state();

/**
 * 하지만 해당 생성 함수도 글로벌 영역에서 접근이 가능하다.
 */

(function makeManyZalot () {
    function createZalot () {
        const zalot = (function () {  
            let hp = 0;   
            return {    
                takeDamage: function (damage) {
                    console.log(damage+"만큼 피격당함");
                    hp -= damage;    
                },
                heal: function () {
                    console.log("힐~~~");
                    hp = 100;
                    return hp;    
                },
                state: function () {
                    console.log("zalot hp = " + hp);
                }  
              }
            })();
    
        return zalot;
    }

    const zalot1 = createZalot();
    const zalot2 = createZalot();
    zalot1.takeDamage(10);
    zalot2.takeDamage(20);
})();
// 이렇게 숨겨서 처리할 수 있다.
