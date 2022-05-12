//Here we will use a data structure called dictionary which will prove to be very helpful
document.getElementById('click').addEventListener('click',()=>{

    var data= {
        "— Carol Burnett" : '"When you have a dream, youve got to grab it and never let go."',
        "— Audrey Hepburn" : '"Nothing is impossible. The word itself says Im possible! "',
        "— Alexander the Great" : '"There is nothing impossible to they who will try."',
        "— Michael Altshuler" : '"The bad news is time flies. The good news is youre the pilot."',
        "— Nicole Kidman" : '"Life has got all those twists and turns. Youve got to hold on tight and off you go."',
        "— Walt Whitman" : '"Keep your face always toward the sunshine, and shadows will fall behind you"',
        "— Amal Clooney" : '"Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell."',
        "— Duchess Meghan" : '"You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box."',
        "— Taylor Swift" : '"I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened … its normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please."',
        " Winston Churchill" : '"Success is not final, failure is not fatal: it is the courage to continue that counts"',
    }
    
    var authors= Object.keys(data);
    //Creates an array of Authors
    var author= authors[Math.floor(Math.random()*authors.length)];
    var quote = data[author];
    console.log(quote);
    console.log(author);
    document.getElementById('quote').innerHTML= quote;
    document.getElementById('author').innerHTML= author;
})
