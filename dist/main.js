(()=>{const e=document.querySelector("#btnMarriage"),t=document.querySelector("#btnDivorce"),n=document.querySelector("#marriage"),o=document.querySelector("#divorce"),r=document.querySelector("#header");e.addEventListener("click",(function(){n.classList.remove("d-none"),r.classList.add("d-none"),r.classList.remove("d-flex")})),t.addEventListener("click",(function(){o.classList.remove("d-none"),r.classList.add("d-none"),r.classList.remove("d-flex")}));const c=document.getElementById("btnRandomFox");document.getElementById("randomFox"),c.addEventListener("click",(function(){!async function(){const e=await fetch("https://randomfox.ca/floof/"),t=await e.json();document.getElementById("randomFox").style.backgroundImage=`url(${t.image})`}()}));const u=document.querySelector("#submit01"),l=document.querySelector("#submit02");u.addEventListener("click",(function(){if(0!=document.querySelector("#goldFineness01").selectedIndex&&""!=document.querySelector("#ringDiameter01").value&&""!=document.querySelector("#ringDiameter02").value&&""!=document.querySelector("#ringThickness01").value&&""!=document.querySelector("#ringThickness02").value&&""!=document.querySelector("#ringWidth01").value&&""!=document.querySelector("#ringWidth02").value&&document.querySelector("#ringDiameter01").value>2*document.querySelector("#ringThickness01").value&&document.querySelector("#ringDiameter02").value>2*document.querySelector("#ringThickness02").value){const e="https://api.nbp.pl/api/cenyzlota//?format=json";!async function(){const t=document.querySelector("#ringDiameter01").value,n=document.querySelector("#ringDiameter02").value,o=document.querySelector("#ringThickness01").value,r=document.querySelector("#ringThickness02").value,c=document.querySelector("#ringWidth01").value,u=document.querySelector("#ringWidth02").value,l=document.querySelector("#goldFineness01"),i=l.options[l.selectedIndex].value,d=await fetch(e),a=await d.json(),s=document.getElementById("goldPriceMarriage").innerHTML=a[0].cena;document.getElementById("marriageResult").classList.add("bg-ring"),document.querySelector("#alert01").classList.add("d-none"),document.querySelector("#ringDiameter01").style.backgroundColor="#fff",document.querySelector("#ringThickness01").style.backgroundColor="#fff",document.querySelector("#ringDiameter02").style.backgroundColor="#fff",document.querySelector("#ringThickness02").style.backgroundColor="#fff",document.getElementById("marriageResult").innerHTML=`<div>Złoto w Waszych obrączkach jest warte: </br> ${Math.round(i*(.001*(Math.PI*Math.pow(.5*t,2)*c-Math.PI*Math.pow(.5*(t-o),2)*c)*19.3*s)+i*(.001*(Math.PI*Math.pow(.5*n,2)*u-Math.PI*Math.pow(.5*(n-r),2)*u)*19.3*s))} PLN </div>`}()}else document.querySelector("#ringDiameter01").value<=2*document.querySelector("#ringThickness01").value&&document.querySelector("#ringDiameter02").value<=2*document.querySelector("#ringThickness02").value&&0!=document.querySelector("#goldFineness01").selectedIndex&&""!=document.querySelector("#ringDiameter01").value&&""!=document.querySelector("#ringDiameter02").value&&""!=document.querySelector("#ringThickness01").value?(document.querySelector("#alert01").classList.remove("d-none"),document.querySelector("#ringDiameter01").style.backgroundColor="#d7cca8",document.querySelector("#ringThickness01").style.backgroundColor="#d7cca8",document.querySelector("#ringDiameter02").style.backgroundColor="#d7cca8",document.querySelector("#ringThickness02").style.backgroundColor="#d7cca8"):document.querySelector("#ringDiameter01").value<=2*document.querySelector("#ringThickness01").value&&""!=document.querySelector("#ringDiameter01").value&&""!=document.querySelector("#ringDiameter02").value?(document.querySelector("#alert01").classList.remove("d-none"),document.querySelector("#ringDiameter01").style.backgroundColor="#d7cca8",document.querySelector("#ringThickness01").style.backgroundColor="#d7cca8",document.querySelector("#ringDiameter02").style.backgroundColor="#fff",document.querySelector("#ringThickness02").style.backgroundColor="#fff"):document.querySelector("#ringDiameter02").value<=2*document.querySelector("#ringThickness02").value&&""!=document.querySelector("#ringDiameter02").value&&""!=document.querySelector("#ringDiameter02").value?(document.querySelector("#alert01").classList.remove("d-none"),document.querySelector("#ringDiameter02").style.backgroundColor="#d7cca8",document.querySelector("#ringThickness02").style.backgroundColor="#d7cca8",document.querySelector("#ringDiameter01").style.backgroundColor="#fff",document.querySelector("#ringThickness01").style.backgroundColor="#fff"):document.querySelector("#alert01").classList.remove("d-none")})),l.addEventListener("click",(function(){n.classList.add("d-none"),r.classList.remove("d-none"),r.classList.add("d-flex")}));const i=document.querySelector("#oneRing"),d=document.querySelector("#twoRings"),a=document.querySelector(".secondRing"),s=document.querySelector("#submit03"),m=document.querySelector("#submit04");document.querySelector("#divorceResultText"),i.addEventListener("click",(function(){1==i.checked&&a.classList.add("d-none")})),d.addEventListener("click",(function(){1==d.checked&&a.classList.remove("d-none")})),m.addEventListener("click",(function(){o.classList.add("d-none"),r.classList.remove("d-none"),r.classList.add("d-flex")})),s.addEventListener("click",(function(){if(""!=document.querySelector("#ringWeight01").value&&(document.querySelector("#option4").parentElement.classList.contains("active")||document.querySelector("#option5").parentElement.classList.contains("active")||document.querySelector("#option6").parentElement.classList.contains("active"))&&1==i.checked){const e="https://api.nbp.pl/api/cenyzlota//?format=json";!async function(){const t=document.querySelector("#ringWeight01").value,n=document.querySelector(".active>input").value,o=await fetch(e),r=await o.json(),c=document.getElementById("goldPriceDivorce").innerHTML=r[0].cena;document.getElementById("divorceResult").classList.remove("bg-two-ring"),document.getElementById("divorceResult").classList.add("bg-one-ring"),document.querySelector("#alert02").classList.add("d-none"),document.getElementById("divorceResult").innerHTML=`\n      Za swoją obrączkę otrzumasz: ${Math.round(n*t*c)} PLN`}()}else""!=document.querySelector("#ringWeight01").value&&""!=document.querySelector("#ringWeight02").value&&(document.querySelector("#option4").parentElement.classList.contains("active")||document.querySelector("#option5").parentElement.classList.contains("active")||document.querySelector("#option6").parentElement.classList.contains("active"))&&1==d.checked?async function(){const e=document.querySelector("#ringWeight01").value,t=document.querySelector("#ringWeight02").value,n=document.querySelector(".active>input").value,o=await fetch("https://api.nbp.pl/api/cenyzlota//?format=json"),r=await o.json(),c=document.getElementById("goldPriceDivorce").innerHTML=r[0].cena;document.getElementById("divorceResult").classList.remove("bg-one-ring"),document.getElementById("divorceResult").classList.add("bg-two-ring"),document.querySelector("#alert02").classList.add("d-none"),document.getElementById("divorceResult").innerHTML=`<div>Za obie obrączki otrzymasz:</br> ${Math.round(n*e*c+n*t*c)} PLN</div>`}():document.querySelector("#alert02").classList.remove("d-none")}));const y=document.querySelector("#btnReset01"),g=document.querySelector("#btnReset02");y.addEventListener("click",(function(){document.getElementById("marriageResult").classList.remove("bg-ring"),document.getElementById("marriageResult").innerHTML="",document.querySelector("#alert01").classList.add("d-none"),document.querySelector("#ringDiameter01").style.backgroundColor="#fff",document.querySelector("#ringThickness01").style.backgroundColor="#fff",document.querySelector("#ringDiameter02").style.backgroundColor="#fff",document.querySelector("#ringThickness02").style.backgroundColor="#fff"})),g.addEventListener("click",(function(){document.getElementById("divorceResult").classList.remove("bg-two-ring","bg-one-ring"),document.getElementById("divorceResult").innerHTML="",document.querySelector("#alert02").classList.add("d-none"),document.querySelector("#alert03").classList.add("d-none")})),l.addEventListener("click",(function(){location.reload()})),m.addEventListener("click",(function(){location.reload()}))})();
//# sourceMappingURL=main.js.map