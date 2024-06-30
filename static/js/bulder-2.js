function innerBlock(data) {
    var backgorund = document.getElementById('tBackgorund');
    backgorund.setAttribute('src', '../../static/media/' + data.backgorund)
    document.getElementById('cur_1').innerHTML = data.cur_1;
    document.getElementById('cur_price').innerHTML = data.cur_price;
    document.getElementById('total').innerHTML = data.total;

    let socialMedia = '';
    if (data.website !== '#') {
        socialMedia += `
        <a target="_blank" href="${data.website}"
            class="style_socialBox__xi3_J">
            <img alt="browser_web_link" srcset="../../static/media/website.c4b1d8c7.svg" width="18.53"
            height="18.53">
        </a>`;
    }
    if (data.twitter !== '#') {
        socialMedia += `
        <a target="_blank" href="${data.twitter}"
            class="style_socialBox__xi3_J">
            <img alt="twitter_link" src="../../static/media/twitter.c91f411e.svg" width="21.04"
            height="17.1">
        </a>
        `;
    }
    if (data.telegram !== '#') {
        socialMedia += `
        <a target="_blank" href="${data.telegram}" class="style_socialBox__xi3_J">
            <img alt="telegram_link" src="../../static/media/telegram.098c628b.svg" width="22"
            height="18.33">
        </a>
        `;
    }
    if (data.instagram !== '#') {
        socialMedia += `
        <a target="_blank" href="${data.instagram}" class="style_socialBox__xi3_J">
        <img alt="instagram" src="../../static/media/instagram.603100ef.svg" width="18.75"
            height="18.75">
        </a>
        `;
    }
    if (data.medium !== '#') {
        socialMedia += `
        <a target="_blank" href="${data.medium}"
        class="style_socialBox__xi3_J">
        <img alt="medium_link" src="../../static/media/medium.70021f88.svg" width="18.75"
          height="18.75">
      </a>
        `;
    }
    if (data.discord !== '#') {
        socialMedia += `
        <a target="_blank" href="${data.discord}" class="style_socialBox__xi3_J">
            <img alt="medium_link" src="../../static/media/discord.svg" width="18.75" height="18.75">
        </a>
        `;
    }
    return `
    <div class="style_name__sDAN_">${data.title}</div>
    <div class="style_description__dDiy6">${data.text}
    </div>
    <div class="style_socials__CfB_0">${socialMedia}</div>
    `;
}

function tokenInformation(data) {
    document.getElementById('tAccess').innerHTML = data.tAccess;

    return `
        <div class="style_tokenInformationBarContainer__CS5vV">
            <div class="style_title__G5XfR">TOKEN TICKER</div>
            <div class="style_data__lERaJ">${data.tTicker}</div>
        </div>
        <div class="style_tokenInformationBarContainer__CS5vV">
            <div class="style_title__G5XfR">TOKENS FOR SALE</div>
            <div class="style_data__lERaJ"><img alt="#" width="26"
            src="../../static/media/token-supply.png"
                height="29" decoding="async" data-nimg="1" loading="lazy" style="color:transparent">
            <div class="style_valueContainer__e_rMI">${data.tSale}</div>
            </div>
        </div>
        <div class="style_tokenInformationBarContainer__CS5vV">
            <div class="style_title__G5XfR">NETWORK</div>
            <div class="style_data__lERaJ">${data.tNetwork}</div>
        </div>
        <div class="style_tokenInformationBarContainer__CS5vV">
            <div class="style_title__G5XfR">TOKEN ADDRESS</div>
            <div class="style_data__lERaJ">${data.tAddress}</div>
        </div>
        <div class="style_tokenInformationBarContainer__CS5vV">
            <div class="style_title__G5XfR">DECIMALS</div>
            <div class="style_data__lERaJ">${data.tDecimals}</div>
        </div>
    `;
}


document.addEventListener('DOMContentLoaded', () => {
    const parts = window.location.href.split('/'); 
    const dataLink = parts.filter(Boolean).pop();
    const indX = data.findIndex(item => item.link === dataLink);
    console.log(indX);


    const container = document.getElementById('innerBlock');
    container.innerHTML = '';
    const blockHtml = innerBlock(data[indX]);
    container.insertAdjacentHTML('beforeend', blockHtml);

    const tokenBlcok = document.getElementById('tokenInformation');
    tokenBlcok.innerHTML = '';
    const blockHtml2 = tokenInformation(data[indX]);
    tokenBlcok.insertAdjacentHTML('beforeend', blockHtml2);
});
