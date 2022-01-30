    
    
    // Plain Javascript
    let plusClick = document.querySelector(".plus-1")
    let minusClick = document.querySelector(".minus-1") 
    let likes = document.querySelector(".likes-1")
    let plusClick2 = document.querySelector(".plus-2")
    let minusClick2 = document.querySelector(".minus-2") 
    let likes2 = document.querySelector(".likes-2")
    let plusClick3 = document.querySelector(".plus-3")
    let minusClick3 = document.querySelector(".minus-3") 
    let likes3 = document.querySelector(".likes-3")
    let plusClick4 = document.querySelector(".plus-4")
    let minusClick4 = document.querySelector(".minus-4") 
    let likes4 = document.querySelector(".likes-4")
    let textAreaEdit = document.querySelector(".update-textarea")
    let btnUpdate = document.querySelector(".btn-update")
    let p1 = document.querySelector('.p-edited')
    let containerUpdate = document.querySelector('.container-update')
    
    // let newPlusClick = 0; 

   plusClick.addEventListener('click', function(){
     likes.textContent++; 
    //  likes.textContent = newPlusClick;
     console.log(likes.textContent)
   })

   minusClick.addEventListener("click", function(){
     likes.textContent--;
     console.log(likes.textContent)

     if(likes.textContent < 1){
       likes.textContent = 0
     }
   })

   plusClick2.addEventListener('click', function(){
     
     likes2.textContent++
     console.log(likes2.textContent)
   })

   minusClick2.addEventListener("click", function(){
     likes2.textContent--;
     console.log(likes2.textContent)

     if(likes2.textContent <= 0){
       likes2.textContent = 0
     }
   })

   plusClick3.addEventListener('click', function(){
     likes3.textContent++;
     console.log(likes3.textContent)
   })

   minusClick3.addEventListener("click", function(){
     likes3.textContent--;
     console.log(likes3.textContent)

     if(likes3.textContent <= 0){
       likes3.textContent = 0
     }
   })

   plusClick4.addEventListener('click', function(){
     likes4.textContent++;
     console.log(likes4.textContent)
   })

   minusClick4.addEventListener("click", function(){
     likes4.textContent--;
     console.log(likes4.textContent)

     if(likes4.textContent <= 0){
       likes4.textContent = 0
     }
   })

   
    // End Plain Javascript

  $(document).ready(function(){
    
    // plus & minus button 1

    $(".plus-1").mouseover(function(){
      $(".plus-1 path").attr("fill","var(--moderate-blue)"); 
    });
    $(".plus-1").mouseout(function(){
      $(".plus-1 path").attr("fill", "var(--light-grayish-blue)")
    })

    $(".minus-1").mouseover(function(){
      $(".minus-1 path").attr("fill","var(--moderate-blue)"); 
    });
    $(".minus-1").mouseout(function(){
      $(".minus-1 path").attr("fill", "var(--light-grayish-blue)")
    })

    // Plus and Minus button 2
    $(".plus-2").mouseover(function(){
      $(".plus-2 path").attr("fill","var(--moderate-blue)"); 
    });
    $(".plus-2").mouseout(function(){
      $(".plus-2 path").attr("fill", "var(--light-grayish-blue)")
    })

    $(".minus-2").mouseover(function(){
      $(".minus-2 path").attr("fill","var(--moderate-blue)"); 
    });
    $(".minus-2").mouseout(function(){
      $(".minus-2 path").attr("fill", "var(--light-grayish-blue)")
    })

        // Plus and Minus button 3
        $(".plus-3").mouseover(function(){
      $(".plus-3 path").attr("fill","var(--moderate-blue)"); 
    });
    $(".plus-3").mouseout(function(){
      $(".plus-3 path").attr("fill", "var(--light-grayish-blue)")
    })

    $(".minus-3").mouseover(function(){
      $(".minus-3 path").attr("fill","var(--moderate-blue)"); 
    });
    $(".minus-3").mouseout(function(){
      $(".minus-3 path").attr("fill", "var(--light-grayish-blue)")
    })

        // Plus and Minus button 4
        $(".plus-4").mouseover(function(){
      $(".plus-4 path").attr("fill","var(--moderate-blue)"); 
    });
    $(".plus-4").mouseout(function(){
      $(".plus-4 path").attr("fill", "var(--light-grayish-blue)")
    })

    $(".minus-4").mouseover(function(){
      $(".minus-4 path").attr("fill","var(--moderate-blue)"); 
    });
    $(".minus-4").mouseout(function(){
      $(".minus-4 path").attr("fill", "var(--light-grayish-blue)")
    })

     
    $(".icon-reply-1, .reply-1").mouseover(function(){
      $(".icon-reply-1 path").attr("fill","var(--light-grayish-blue)"); 
      $(".reply-1").css("color", "var(--light-grayish-blue)")
    });
    $(".icon-reply-1,.reply-1").mouseout(function(){
      $(".icon-reply-1 path").attr("fill", "var(--moderate-blue)")
      $(".reply-1").css("color", "var(--moderate-blue)")
    })

    $(".icon-reply-2, .reply-2").mouseover(function(){
      $(".icon-reply-2 path").attr("fill","var(--light-grayish-blue)"); 
      $(".reply-2").css("color", "var(--light-grayish-blue)")
    });
    $(".icon-reply-2,.reply-2").mouseout(function(){
      $(".icon-reply-2 path").attr("fill", "var(--moderate-blue)")
      $(".reply-2").css("color", "var(--moderate-blue)")
    })
    
    
    $(".icon-reply-3, .reply-3").mouseover(function(){
      $(".icon-reply-3 path").attr("fill","var(--light-grayish-blue)"); 
      $(".reply-3").css("color", "var(--light-grayish-blue)")
    });
    $(".icon-reply-3,.reply-3").mouseout(function(){
      $(".icon-reply-3 path").attr("fill", "var(--moderate-blue)")
      $(".reply-3").css("color", "var(--moderate-blue)")
    })

    $(".icon-reply-x, .reply-x").mouseover(function(){
      $(".icon-reply-x path").attr("fill","var(--light-grayish-blue)"); 
      $(".reply-x").css("color", "var(--light-grayish-blue)")
    });
    $(".icon-reply-x,.reply-x").mouseout(function(){
      $(".icon-reply-x path").attr("fill", "var(--moderate-blue)")
      $(".reply-x").css("color", "var(--moderate-blue)")
    })
    
    

    $(".icon-reply-1, .reply-1").click(function(){
      
      $(".container-hide-1").toggle()
      
    })

    $(".icon-reply-2, .reply-2").click(function(){
      
      $(".container-hide-2").toggle()
      
    })

    $(".icon-reply-x, .reply-x").click(function(){
      
      $(".container-hide-x").toggle()
      
    })

    $(".icon-reply-3, .reply-3").click(function(){
      
      $(".container-juliusomo-hider").toggle()
      
    })
   
    // Edit hover effect for edit button
    $(".edit-icon, .edit").mouseover(function(){
      $(".edit-icon path").attr("fill","var(--light-grayish-blue)"); 
      $(".edit").css("color", "var(--light-grayish-blue)")
    });
    $(".edit-icon, .edit").mouseout(function(){
      $(".edit-icon path").attr("fill", "var(--moderate-blue)")
      $(".edit").css("color", "var(--moderate-blue)")
    })
  })

 // Edit hover effect for edit button
 $(".delete-icon, .delete").mouseover(function(){
      $(".delete-icon path").attr("fill","var(--pale-red)"); 
      $(".delete").css("color", "var(--pale-red)")
    });
    $(".delete-icon, .delete").mouseout(function(){
      $(".delete-icon path").attr("fill", "var(--soft-red)")
      $(".delete").css("color", "var(--soft-red)")
    })
  

  // Edit Container on click to display modal
  $(".delete-container").click(function(){
    $(".modal-container").show()
  }) 
 $(".delete-comment").click(function(){
   $(".container-update").hide()
   $(".modal-container").hide()
 })

 //Remove modal class when NO, CACEL is clicked
 $(".cancel").click(function(){
   $(".modal-container").hide()
 })

//  Hide edit paragraphs based on click on edit container
 $(".edit-container").click(function(){
  $(".update-textarea").show() 
  $(".btn-update").show()
  $(".container-update .paragraphs").hide()
 })

btnUpdate.addEventListener('click', function(){
  p1.textContent = textAreaEdit.value;
  containerUpdate.style.paddingBottom = '55px';
  console.log (textAreaEdit.value)
  console.log(p1.textContent)
})

$(".btn-update").click(function(){
  $(".update-textarea").hide() 
  $(".btn-update").hide()
  $(".container-update .paragraphs").show()
})
