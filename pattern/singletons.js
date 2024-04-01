// 싱글톤 : 하나의 인스턴스(객체)를 애플리케이션 전체에서 공유하는 디자인 패턴을 의미한다.

let singleGateWay = (function () {
    let zalot;

    function createZalot () {
        const zalot = (function () {  
            let hp = 0;
            let uniqueId = "ABCD";

            return {    
                takeDamage: (damage) => {
                    console.log(damage+"만큼 피격당함");
                    hp -= damage;    
                },
                heal: () => {
                    console.log("힐~~~");
                    hp = 100;
                    return hp;    
                },
                state: () => {
                    console.log("zalot hp = " + hp);
                },
                getUniqueId : () => {
                    console.log("zalot uniqueId = " + uniqueId);
                }  
              }
            })();
    
        return zalot;
    }

    return {
        createSZalot: () =>{
            if(!zalot){
                zalot = createZalot();
            }

            return zalot;
        }
    }
})();

let zalot1 = singleGateWay.createSZalot();
zalot1.getUniqueId();
let zalot2 = singleGateWay.createSZalot();
zalot2.getUniqueId();


