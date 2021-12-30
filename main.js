function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/a3EHcPcDm/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    console.log("Red "+random_number_r);
    console.log("Green "+random_number_g);
    console.log("Blue "+random_number_b);

    document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

    document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
    document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("voice").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

    img = document.getElementById("image");

    if(results[0].label == "Barking"){
        img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fcute-little-dog-cartoon-isolated-vector-22962034&psig=AOvVaw2xTcfRCByGm09IOeqgr0mU&ust=1640941114351000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCr_pSUi_UCFQAAAAAdAAAAABAD";
        dog = dog+1;
        document.getElementById("detected").innerHTML = "Detected Dog - "+ dog;
    }
    else if(results[0].label == "Meowing"){
        img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fillustration-of-cute-cartoon-cat-sitting-and-smiling-gm1140204892-305040365&psig=AOvVaw1kws67QKOA7b8hSW-dCyl9&ust=1640941201385000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiTpMCUi_UCFQAAAAAdAAAAABAJ";
        cat = cat+1;
        document.getElementById("detected").innerHTML = "Detected Cat - "+ cat;
    }
    else if(results[0].label == "Roar"){
        img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgraphicriver.net%2Fitem%2Flion-cartoon%2F25061337&psig=AOvVaw1pniR49kAK8j1xbdqugLE2&ust=1640941243035000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDZyNyUi_UCFQAAAAAdAAAAABAD";
        lion = lion+1;
        document.getElementById("detected").innerHTML = "Detected Lion - "+ lion;
    }
    else if(results[0].label == "Mooing"){
        img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pixtastock.com%2Fillustration%2F56790361&psig=AOvVaw07Ic5gNs7F7uUtijhbxJZT&ust=1640941294451000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDrlPSUi_UCFQAAAAAdAAAAABAf";
        cow = cow+1;
        document.getElementById("detected").innerHTML = "Detected Cow - "+ cow;
    }
    
}
}
