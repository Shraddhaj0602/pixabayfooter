

const anchors = document.getElementsByClassName("anchor");
const big_ig_button= document.getElementsByClassName("btn ig-btn");
const big_tw_button= document.getElementsByClassName("btn tw-btn");
const big_fb_button= document.getElementsByClassName("btn fb-btn");



for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("mouseover", () => {
    anchors[i].style.textDecoration = "underline";
  });

  anchors[i].addEventListener("mouseout", () => {
    anchors[i].style.textDecoration = "none";
  });
}



for (let i = 0; i < big_ig_button.length; i++) {
   big_ig_button[i].addEventListener("mouseover", () => {
      big_ig_button[i].style.color = "green";
    });
  
    big_ig_button[i].addEventListener("mouseout", () => {
      big_ig_button[i].style.color = " #585858";
    });
  }


for (let i = 0; i < big_tw_button.length; i++) {
    big_tw_button[i].addEventListener("mouseover", () => {
        big_tw_button[i].style.color = "green";
    });
  
    big_tw_button[i].addEventListener("mouseout", () => {
        big_tw_button[i].style.color = "#585858";
    });
  }



for (let i = 0; i < big_fb_button.length; i++) {
    big_fb_button[i].addEventListener("mouseover", () => {
        big_fb_button[i].style.color = "green";
    });
  
    big_fb_button[i].addEventListener("mouseout", () => {
        big_fb_button[i].style.color = "#585858";
    });
  }
