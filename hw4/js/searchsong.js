    var songs = JSON.parse(localStorage.getItem("songs"))
    if(songs == null){ 
      localStorage.setItem("songs",songs)
      songs = [];
    }
    
    function nl2br(str,is_xhtml){
        var breakTag = (is_xhtml || typeof is_xhtml == 'undefined') ? '<br />' : '<br>';
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,'$1' + breakTag + '$2');
    }
    function search(){
        txt = document.getElementById('search').value;
        disp = document.getElementById('disp');
        disp.innerHTML = "";
        html = "";
        cnt = 0;
        for(i = 0;i < songs.length;i++){
        if(songs[i][0].indexOf(txt) >= 0){
          cnt++;
          html += `
          <div class="card">
              <div class="card-body">
              <h4 class="card-title">เพลง ${songs[i][0]}</h4>
              <h4 class="card-title">ศิลปิน ${songs[i][1]}</h4>
              <p class="card-text">${nl2br(songs[i][2])}</p>
              </div>
          </div>`;
        }
    }
        if(cnt == 0){
          disp.innerHTML = `
          <div class="alert alert-danger">
          <strong>ไม่พบเพลง </strong>${txt}
          </div>`;
        }else{
          document.getElementById("disp").innerHTML = `
          <div class="alert alert-success">
            <strong>พบ </strong>${cnt} เพลง
          </div>`;
          document.getElementById("disp").innerHTML += html;
        }
        return false;

    }