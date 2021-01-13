function addsong(){
        songs = localStorage.getItem('songs');
        if(songs === null){
            songs = [];
            
        }else{
            songs = JSON.parse(songs);
        }
        data = [
            namesong = document.getElementById('addsong').value,
            artist = document.getElementById('artist').value,
            lyrics = document.getElementById('lyrics').value
        ];
            songs.push(data);
        
        localStorage.setItem('songs',JSON.stringify(songs));
        document.getElementById('addsong').value =''
        document.getElementById('artist').value =''
        document.getElementById('lyrics').value =''

    }

function Clearform(){
    document.getElementById('addsong').value =''
    document.getElementById('artist').value =''
    document.getElementById('lyrics').value =''
}