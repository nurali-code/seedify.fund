function createBlock(data) {
    let statusBlocks = '';
    let linkBlock = '';
    let imageLink = '';

    if (data.live === 'on') {
        statusBlocks += `
        <div class="style_container__5HuBA">
            <div class="style_live__bPYjz">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="4" fill="#00D181"></circle>
                    <circle cx="8" cy="8" r="7.33333" stroke="#00D181" stroke-opacity="0.6" stroke-width="1.33333"></circle>
                </svg>live
            </div>
        </div>`;
        linkBlock = `<a href="igo/${data.link}" type="button" class="style_button__fU377 style_active__Ssu_U style_lg__gcLqO"><span>Register</span></a>`;
        imageLink = `<div class="style_imageContainer__zlhyQ"><a href="igo/${data.link}"><img src="${data.image}" alt="Project thumbnail" height="128" width="128"></a></div>`;
        
    } else {
        linkBlock = `<button type="button" class="style_button__fU377 style_active__Ssu_U style_lg__gcLqO" disabled=""><span>Coming Soon</span></button>`;
        imageLink = `<div class="style_imageContainer__zlhyQ"><img src="${data.image}" alt="Project thumbnail" height="128" width="128"></div>`;
    }

    if (data.upcoming === 'on') {
        statusBlocks += `
        <div class="style_container__5HuBA">
            <div class="style_upcoming__eLJiw">upcoming</div>
        </div>`;
    }

    if (data.refundable === 'on') {
        statusBlocks += `
        <div class="style_container__5HuBA">
            <div class="style_refundable__v27WD">refundable</div>
        </div>`;
    }
    return `
      <div class="style_container__wNVfO">
          <div class="style_linkContainer__U4pSv">
              <div class="style_bannerContainer__fsR7K">
                  <div class="style_subBannerContainer__zbJS8"> ${imageLink}
                      <div class="style_statusContainer__ZGW8P">
                        <div class="style_subStatusContainer__2pWHE">${statusBlocks}</div></div>
                    </div>
              </div>
              <div class="style_secondContainer__xxX7C">
                  <div class="style_descriptionContainer__yBWnK">
                      <div class="style_titleContainer__8tM82">
                          <p class="style_title__sAKar">${data.title}</p>
                      </div>
                      <section>
                          <p class="style_description__2cdWs">
                              ${data.text}
                              <a href="igo/${data.link}" rel="noopener noreferrer" target="_blank">View More</a>
                          </p>
                      </section>
                  </div>
                  <div class="style_tokenPriceContainer__oxmP0">
                      <p class="style_tokenPriceText__oLQPH">Targeted Raise</p>
                      <div class="style_tokenPriceSubContainer__pr8_T">
                          <img alt="token" src="static/media/${data.token}" width="30" height="30" loading="lazy">
                          <div class="style_valueContainer__e_rMI" style="cursor: pointer;">
                          <span>${data.targetedRaise}</span><span>${data.targetedRaiseCurrency}</span></div> 
                      </div>
                  </div>
                  <div class="style_bigInfoContainer__K9lzc">
                      <div class="style_infoContainer__0TgN4">
                          <div class="style_targetedContainer__YjqS0">
                              <div class="style_subInfoContainer___osEq">TOKEN PRICE<div class="style_raise__ywwa9">
                                  <div class="style_valueContainer__e_rMI" style="cursor: pointer;">
                                      <span>${data.tokenPrice}</span> <span>${data.tokenCurrency}</span>
                                      </div>
                                    </div>
                              </div>
                              <div class="style_subInfoContainer___osEq">TYPE<span>${data.type}</span></div>
                          </div>
                          <div class="style_subInfoContainer___osEq">REGISTER PERIOD (FROM)<span>${data.registerPeriodFrom}</span></div>
                          <div class="style_subInfoContainer___osEq">REGISTER PERIOD (T0)<span>${data.registerPeriodTo}</span></div>
                      </div>
                      <div class="style_buttonContainer__9HHN2">${linkBlock}</div>
                  </div>
              </div>
          </div>
      </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cont');
    container.innerHTML = '';
    data.forEach(e => {
        const blockHtml = createBlock(e);
        container.insertAdjacentHTML('beforeend', blockHtml);
    });
});
