let text = document.getElementById('word');
            let btn = document.getElementById('button');
            let display = document.querySelector('.hidden');

            btn.addEventListener('click', ()=>{
                let phrase = text.value;
                let count = 0;
                for(let i=0,j=(phrase.length-1); i<phrase.length, j>=0; ++i,--j){
                    if(phrase[i]==phrase[j]){
                        count+=1;
                    }
                    else{
                        count=0;
                    }
                }

                if(count!=0){
                    display.setAttribute('style','display:block;')
                    display.innerHTML = `"${phrase}" is a Palindrome`;
                }

                else{
                    display.setAttribute('style','display:block;')
                    display.innerHTML = `"${phrase}" is not a Palindrome`;
                }
            })
