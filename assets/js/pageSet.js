//#페이지 [홈페이지 메인] index.html의 banner & index1 & index2
//메인 컨텐츠 페이지 code = Page_index_html_code
function PageStart_index_html() //main index의 페이지 불러오는 함수.
{
    document.getElementById('Page_index_html').innerHTML = Page_index_html_code;
}
var Page_index_html_code = //Page_index.html_code
    `
<section id="banner">
<div class="content">
    <header>
        <h1>'Keyboard Pathfinder' <br />
            나의 키보드를 찾는 쉽고 빠른 방법</h1>
        <p>지금 비싸고 고르기 어려운 기계식키보드에 답을 찾습니다.</p>
    </header>
    <p>컴퓨터는 업무에서 뗄 수 없는 도구가 되었고 입력장치인 키보드는 충분히 발전하였습니다. 하지만 비싸고 선택하기 어려운 키보드를 이제는 제대로 이용할 필요가 있습니다.
        처음시작하기에 어려운 기계식키보드를 쉽게 알려드립니다.</p>
    <ul class="actions">
        <li><a class="button big" onclick="PageStart_keyBoardMbti_html()">My Keyboard MBTI ➩Go</a></li>
        <p></p>
    </ul>
</div>
<span class="image object">
    <img src="images/index/pic00.png" alt="" />
</span>
</section>

<!-- Section -->
<section id="index_1">
<header class="major">
    <h2>홈페이지 소개</h2>
</header>
<div class="features">
    <article>
        <span class="icon fa-paper-plane"></span> <!-- Section -->
        <div class="content">
            <h3>방법을 제시해드립니다.</h3>
            <p>메뉴:"나의 키보드찾기"에서는 어떤 키보드가 필요한지 알아 볼 수 있도록 간단한 조사과 결과를 제공합니다. 원한다면 바로 물건을 찾아 볼 수도 있습니다.
            </p>
        </div>
    </article>
    <article>
        <span class="icon solid fa-signal"></span> <!--  -->
        <div class="content">
            <h3>정보를 제공해드립니다.</h3>
            <p>추천에만 의존하지 마세요. 키보드의 정보와 키캡의 정보를 한번에 모아두었습니다. 직접 키보드의 세계를 구경하시고 전문가가 되어보세요. 묻고 사지만 말고
                전문가도 되어보세요.</p>
        </div>
    </article>
    <article>
        <span class="icon solid fa-rocket"></span> <!-- Section -->
        <div class="content">
            <h3>물건을 빠르게 처리합니다.</h3>
            <p>충분한 정보를 가지고 기계식키보드에 대한 확신이 들었다면 국내외 시장에서 물건을 찾고 구매하여 실질적인 사용과 더 나은 입력환경을 누려보세요.</p>
        </div>
    </article>
    <article>
        <span class="icon solid fa-gem"></span> <!-- Section -->
        <div class="content">
            <h3>순서대로 방법을 제시합니다.</h3>
            <p>홈페이지에서 준비된 다양한 설문조사, 부족한 정보를 채우기 위한 사전, 타건영상과 키캡정보, 구매방법까지 진행하여 가장 적합한 기계식키보드를 찾아보세요.
            </p>
        </div>
    </article>
</div>
</section>

<!-- Section -->
<section id="index_2">
<header class="major">
    <h2>서비스 찾아보기</h2>
</header>
<div class="posts">
    <article>
        <a class="image"><img src="images/index/pic01.png" href="#" alt="images/noimage.jpg" onclick="PageStart_keyBoardMbti_html()" /></a>
        <h3>나의 키보드 MBTI 알아보기</h3>
        <p>최신 테스트 기법이 도입된 Mykey-Board-Type-Indicator. (나의키-보드-유형-지표)를 기반으로 하여 나에게 맞는 키보드를 찾아보도록 하세요.
            키보드를 몰라도 찾아 볼 수 있습니다.</p>
        <ul class="actions">
            <li><a href="#" class="button" onclick="PageStart_keyBoardMbti_html()">More</a></li>
        </ul>
    </article>
    <article>
        <a class="image"><img src="images/index/pic02.jpg" href="#" alt="images/noimage.jpg" onclick="PageStart_imageShopping_html()"/></a>
        <h3>이미지로 조립해보기</h3>
        <p>텍스트만으로는 실질적인 조립이 잘 이해되지 않을 수 있습니다. 이미지를 통해 조립해보세요. 가상의 조립으로 나만의 키보드를 만들어보세요.</p>
        <ul class="actions">
            <li><a href="#" class="button" onclick="PageStart_imageShopping_html()">More</a></li>
        </ul>
    </article>
    <article>
        <a class="image" href="#"><img src="images/index/pic03.PNG" href="#" alt="images/noimage.jpg" oonclick="PageStart_whatisKeyboard_html()" /></a>
        <h3>기계식키보드 정보 보기</h3>
        <p>기계식키보드에 대해서 더 알고 싶나요? 자세히 알아보고 구매하고 싶으신가요? 추천만으로는 부족하시다면 기계식키보드에 대해서 모아놓은 정보를 간편하게 열람하세요.
            확인하고 습득하세요. 키보드만 보지 말고 키캡도 보고 디자인을 탐구하세요.</p>
        <ul class="actions">
            <li><a href="#" onclick="PageStart_whatisKeyboard_html()" class="button">More</a></li>
        </ul>
    </article>
    <article>
        <a href="#" onclick="PageStart_videoSwitch_html()" class="image"><img src="images/index/pic04.png" alt="images/noimage.jpg" /></a>
        <h3>키보드 타건 영상 보기</h3>
        <p>없는 키보드를 쓸 수는 없지만 다른 사람이 쓰는 것은 볼 수 있습니다. 영상매체를 통해 기계식키보드를 미리 접해보세요. 누르는 모습과 소리에 집중해보세요.
            시각과 청각을 집중하세요.</p>
        <ul class="actions">
            <li><a href="#" onclick="PageStart_videoSwitch_html()" class="button">More</a></li>
        </ul>
    </article>
    <article>
        <a href="#" onclick="PageStart_buyDanawa_html()" class="image"><img src="images/index/pic05.jpg" alt="images/noimage.jpg" /></a>
        <h3>제품 구매하기</h3>
        <p>'다나와', '에누리', '알리익스프레스'에서 현명하게 구매해보세요.</p>
        <ul class="actions">
            <li><a href="#" onclick="PageStart_buyDanawa_html()" class="button">More</a></li>
        </ul>
    </article>
    <article>
        <a href="#" onclick="PageStart_keyboardStorage_html()" class="image"><img src="images/index/pic06.jpg" alt="images/noimage.jpg" /></a>
        <h3>구매정보 관리하기</h3>
        <p>필요하신 키보드를 찾았나요? 당장 구매하지 않는다면 저희 사이트에 정보를 저장하세요! 웹페이지에서 기록하고 보관해드립니다.</p>
        <ul class="actions">
            <li><a href="#" onclick="PageStart_keyboardStorage_html()" class="button">More</a></li>
        </ul>
    </article>
</div>
</section>
`;


//------------------------------------------------------------------------------------------------------
//#페이지 [나의 키보드 MBTI] 나의 키보드 MBTI
function PageStart_keyBoardMbti_html() //main index의 페이지 불러오는 함수.
{
    document.getElementById('Page_index_html').innerHTML = Page_keyBoardMbti_html_code;
}
var Page_keyBoardMbti_html_code =
    `
<section>
					<header class="main">
						<h1>Keyboard MBTI Test</h1>
						<b><b style="font-size: 200%;">M</b>ykey-<b style="font-size: 200%;">B</b>oard-<b
								style="font-size: 200%;">T</b>ype-<b style="font-size: 200%;">I</b>ndicator</b>
					</header>

					<p>기계식키보드를 설문지에 따라 테스트 해보고 추천하는 기계식키보드의 종류를 알 수 있는 페이지입니다.
					<p>아래의 설문조사에 응하여 결과를 보고 구매시 참조하도록 하세요.</p>
					<p>설문지 문항은 7개로 이루어져 있으며 7개에 문항에 답하시고 결과를 확인하세요.</p>

					<hr class="major" />

					<h2>질문1. 기계식 키보드에 대해서 잘 아시나요?</h2>
					<p>
					<div class="col-4 col-12-small">
						<input type="radio" id="QuestionKeyboard-1-1" name="QuestionKeyboard-1" value="11" onclick="checkAnswerQ1()">
						<label for="QuestionKeyboard-1-1">1. 기계식키보드를 잘 모른다.</label>
					</div>
					<div class="col-4 col-12-small">
						<input type="radio" id="QuestionKeyboard-1-2" name="QuestionKeyboard-1" value="12" onclick="NoticeWhoKnowKeyboard()">
						<label for="QuestionKeyboard-1-2">2. 기계식키보드를 잘 안다.</label>
					</div>
					</p>
					<hr class="major" />
					<h2>질문2. 기계식키보드의 사용 예정 장소는 어딘가요?</h2>
					<p>
					<div class="col-4 col-12-small">
						<input type="radio" id="QuestionKeyboard-2-1" name="QuestionKeyboard-2" value="21" onclick="checkAnswerQ2()">
						<label for="QuestionKeyboard-2-1">1. 회사, 사무실</label>
					</div>
					<div class="col-4 col-12-small">
						<input type="radio" id="QuestionKeyboard-2-2" name="QuestionKeyboard-2" value="22" onclick="checkAnswerQ2()">
						<label for="QuestionKeyboard-2-2">2. 집, 개인실</label>
					</div>
					<div class="col-4 col-12-small">
						<input type="radio" id="QuestionKeyboard-2-3" name="QuestionKeyboard-2" value="23" onclick="checkAnswerQ2()">
						<label for="QuestionKeyboard-2-3">3. 카페 등 정해지지 않은 외부</label>
					</div>
					<div class="col-4 col-12-small">
						<input type="radio" id="QuestionKeyboard-2-4" name="QuestionKeyboard-2" value="24" onclick="checkAnswerQ2()">
						<label for="QuestionKeyboard-2-4">4. 여러 장소 (위 내용 전반) </label>
					</div>
					</p>
					<hr class="major" />
					<h2>질문3. 키보드 우측에 있는 숫자패드를 자주 사용하나요?</h2>
					<p>
						<div class="col-4 col-12-small">
							<input type="radio" id="QuestionKeyboard-3-1" name="QuestionKeyboard-3" value="31" onclick="checkAnswerQ3()">
							<label for="QuestionKeyboard-3-1">1. 숫자패드를 자주 쓴다. (사무 & 회계업무 및 단축키 사용)</label>
						</div>
						<div class="col-4 col-12-small">
							<input type="radio" id="QuestionKeyboard-3-2" name="QuestionKeyboard-3" value="32" onclick="checkAnswerQ3()">
							<label for="QuestionKeyboard-3-2">2. 잘 쓰지 않는다. 없어도 괜찮다. </label>
						</div>
					</p>
					<hr class="major" />
					<h2>질문4. PC방의 기계식키보드처럼 기계식키보드에 찰칵소리가 나야하나요?</h2>
					<p>
						<div class="col-4 col-12-small">
							<input type="radio" id="QuestionKeyboard-4-1" name="QuestionKeyboard-4" value="41" onclick="checkAnswerQ4()">
							<label for="QuestionKeyboard-4-1">1. 찰칵소리가 들리는게 재밌고 좋다.</label>
						</div>
						<div class="col-4 col-12-small">
							<input type="radio" id="QuestionKeyboard-4-2" name="QuestionKeyboard-4" value="42" onclick="checkAnswerQ4()">
							<label for="QuestionKeyboard-4-2">2. 그냥 눌리는 느낌만 났으면 좋겠다.</label>
						</div>
						<div class="col-4 col-12-small">
							<input type="radio" id="QuestionKeyboard-4-3" name="QuestionKeyboard-4" value="43" onclick="checkAnswerQ4()">
							<label for="QuestionKeyboard-4-3">3. 눌리는 소리, 걸리는 느낌없이 조용하게 눌렸으면 좋겠다.</label>
						</div>
					</p>
					<hr class="major" />
					<h2>질문5. 노트북, 태블릿PC등을 자주 사용하는가요?</h2>
					<p>
						<div class="col-4 col-12-small">
							<input type="radio" id="QuestionKeyboard-5-1" name="QuestionKeyboard-5" value="51" onclick="checkAnswerQ5()">
							<label for="QuestionKeyboard-5-1">1. 네, 많이 사용합니다.</label>
						</div>
						<div class="col-4 col-12-small">
							<input type="radio" id="QuestionKeyboard-5-2" name="QuestionKeyboard-5" value="52" onclick="checkAnswerQ5()">
							<label for="QuestionKeyboard-5-2">2. 아니요 많이 사용하지 않습니다.</label>
						</div>
					</p>
					<hr class="major" />
					<h2>질문6.키보드에 선이 있어야 할까요?</h2>
					<p>
						<div class="col-4 col-12-small">
							<input type="radio" id="QuestionKeyboard-6-1" name="QuestionKeyboard-6" value="61" onclick="checkAnswerQ6()">
							<label for="QuestionKeyboard-6-1">1. 선은 반드시 있어야 한다.</label>
						</div>
						<div class="col-4 col-12-small">
							<input type="radio" id="QuestionKeyboard-6-2" name="QuestionKeyboard-6" value="62" onclick="checkAnswerQ6()">
							<label for="QuestionKeyboard-6-2">2. 선은 걸리적 거린다.</label>
						</div>
					</p>
					<hr class="major" />
					<h2>질문7. 키보드의 디자인은 화려한것이 좋을까요?</h2>
					<p>
						<div class="col-4 col-12-small">
							<input type="radio" id="QuestionKeyboard-7-1" name="QuestionKeyboard-7" value="71" onclick="checkAnswerQ7()">
							<label for="QuestionKeyboard-7-1">1. 기계식키보드는 화려하고 멋있어야 한다.</label>
						</div>
						<div class="col-4 col-12-small">
							<input type="radio" id="QuestionKeyboard-7-2" name="QuestionKeyboard-7" value="72" onclick="checkAnswerQ7()">
							<label for="QuestionKeyboard-7-2">2. 화려할 필요는 없지만 돋보이고 싶다.</label>
						</div>
						<div class="col-4 col-12-small">
							<input type="radio" id="QuestionKeyboard-7-3" name="QuestionKeyboard-7" value="73" onclick="checkAnswerQ7()">
							<label for="QuestionKeyboard-7-3">3. 평범하고 무던한 것이 좋다.</label>
						</div>
					</p>
					<hr class="major" />
					<a href="#part_Output_Keyboardmbti" class="button primary" onclick="showKeyboardMbtiResult()">Check Result</a>
					<hr class="major" />
					<div id="part_Output_Keyboardmbti_start"></div>
					<div id="part_Output_Keyboardmbti_size"></div>
					<div id="part_Output_Keyboardmbti_switch"></div>
					<div id="part_Output_Keyboardmbti_connect"></div>
					<div id="part_Output_Keyboardmbti_keycap"></div>
					<div id="part_Output_Keyboardmbti_recommnadKeyboard"></div>
					<div id="part_Output_Keyboardmbti_end"></div>
				</section>
`;


var answerKeyboarMbti = [0, 0, 0, 0, 0, 0, 0, 0]; //답변을 저장하는 배열 0(공백) + 7개(답변여부저장)
function NoticeWhoKnowKeyboard() {
    alert('키보드에 대해서 잘 아신다면 좌측 사이드바에서 다른 메뉴를 이용해보시는것을 권장합니다!');
    answerKeyboarMbti[1] = 1;
}
function checkAnswerQ1() {
    answerKeyboarMbti[1] = 1;
}
function checkAnswerQ2() {
    answerKeyboarMbti[2] = 1;
}
function checkAnswerQ3() {
    answerKeyboarMbti[3] = 1;
}
function checkAnswerQ4() {
    answerKeyboarMbti[4] = 1;
}
function checkAnswerQ5() {
    answerKeyboarMbti[5] = 1;
}
function checkAnswerQ6() {
    answerKeyboarMbti[6] = 1;
}
function checkAnswerQ7() {
    answerKeyboarMbti[7] = 1;
}
function showKeyboardMbtiResult() //결과보기 버튼 function
{
    if //1개라도 설문조사에 응하지 않았다면.....
        (answerKeyboarMbti[1] == 0
        || answerKeyboarMbti[2] == 0
        || answerKeyboarMbti[3] == 0
        || answerKeyboarMbti[4] == 0
        || answerKeyboarMbti[5] == 0
        || answerKeyboarMbti[6] == 0
        || answerKeyboarMbti[7] == 0) {
        alert("응답하지 않은 항목이 있습니다. 모든 항목에 체크가 되었는지 확인하시고 다시 결과버튼을 눌러주세요.");
    }
    else if //모든 설문에 응답하였을시, radio의 value를 파악하여 결과 출력
        (answerKeyboarMbti[1] != 0
        && answerKeyboarMbti[2] != 0
        && answerKeyboarMbti[3] != 0
        && answerKeyboarMbti[4] != 0
        && answerKeyboarMbti[5] != 0
        && answerKeyboarMbti[6] != 0
        && answerKeyboarMbti[7] != 0) {
        var answerDataKeyboard = [0, 0, 0, 0, 0, 0, 0, 0]; //문항value 수집하는 배열
        var obj_length1 = document.getElementsByName("QuestionKeyboard-1").length;//1번문항 value수집
        for (var i = 0; i < obj_length1; i++) {
            if (document.getElementsByName("QuestionKeyboard-1")[i].checked == true) {
                answerDataKeyboard[1] = document.getElementsByName("QuestionKeyboard-1")[i].value;
            }
        }
        var obj_length2 = document.getElementsByName("QuestionKeyboard-2").length;//2번문항 value수집
        for (var i = 0; i < obj_length2; i++) {
            if (document.getElementsByName("QuestionKeyboard-2")[i].checked == true) {
                answerDataKeyboard[2] = document.getElementsByName("QuestionKeyboard-2")[i].value;
            }
        }
        var obj_length3 = document.getElementsByName("QuestionKeyboard-3").length;//3번문항 value수집
        for (var i = 0; i < obj_length3; i++) {
            if (document.getElementsByName("QuestionKeyboard-3")[i].checked == true) {
                answerDataKeyboard[3] = document.getElementsByName("QuestionKeyboard-3")[i].value;
            }
        }
        var obj_length4 = document.getElementsByName("QuestionKeyboard-4").length;//4번문항 value수집
        for (var i = 0; i < obj_length4; i++) {
            if (document.getElementsByName("QuestionKeyboard-4")[i].checked == true) {
                answerDataKeyboard[4] = document.getElementsByName("QuestionKeyboard-4")[i].value;
            }
        }
        var obj_length5 = document.getElementsByName("QuestionKeyboard-5").length;//5번문항 value수집
        for (var i = 0; i < obj_length5; i++) {
            if (document.getElementsByName("QuestionKeyboard-5")[i].checked == true) {
                answerDataKeyboard[5] = document.getElementsByName("QuestionKeyboard-5")[i].value;
            }
        }
        var obj_length6 = document.getElementsByName("QuestionKeyboard-6").length;//6번문항 value수집
        for (var i = 0; i < obj_length6; i++) {
            if (document.getElementsByName("QuestionKeyboard-6")[i].checked == true) {
                answerDataKeyboard[6] = document.getElementsByName("QuestionKeyboard-6")[i].value;
            }
        }
        var obj_length7 = document.getElementsByName("QuestionKeyboard-7").length;//7번문항 value수집
        for (var i = 0; i < obj_length7; i++) {
            if (document.getElementsByName("QuestionKeyboard-7")[i].checked == true) {
                answerDataKeyboard[7] = document.getElementsByName("QuestionKeyboard-7")[i].value;
            }
        }
        var SaveKeyboardmbtiResult_size; //결과내용 종합하여 페이지로 조립하는 변수,배열
        var SaveKeyboardmbtiResult_switch; //결과내용 종합하여 페이지로 조립하는 변수,스위치
        var SaveKeyboardmbtiResult_connect; //결과내용 종합하여 페이지로 조립하는 변수,연결
        var SaveKeyboardmbtiResult_keycap; //결과내용 종합하여 페이지로 조립하는 변수,키캡
        var SaveKeyboardmbtiResult_recommnadKeyboard; //결과내용 종합하여 페이지로 조립하는 변수,키보드추천
        var set_WebStorage_key; //결과 나올 시 웹스토리지에 저장할 key 값
        var set_WebStorage_value = ""; //결과 나올 시 웹스토리지에 저장할 value 값
        //↧검사결과에 따른 결과 출력↧
        //검사결과의 start지점
        SaveKeyboardmbtiResult_start =
            `
           <h1>검사결과가 나왔습니다!</h1><p>
           <h1>당신에게 어울리는 키보드는...</h1><p>
           `;
        //첫번째 page 조합 배열에 대한 결과값 출력
        if (answerDataKeyboard[3] == 31 && answerDataKeyboard[2] == 24) //Q3-1, Q2-4, 풀키배열키보드 + 단축배열
        {
            SaveKeyboardmbtiResult_size =
                `
           <h2>당신의 키보드 배열타입은 풀키배열입니다!</h2>
           `;
            set_WebStorage_value += "풀키배열+"
        }
        else if (answerDataKeyboard[3] == 32 && answerDataKeyboard[2] == 24) //Q3-2, Q2-4, 텐키리스키보드 + 단축배열
        {
            SaveKeyboardmbtiResult_size =
                `
           <h2>당신의 키보드 배열타입은 텐키리스배열입니다!</h2>
           `;
            set_WebStorage_value += "텐키리스+"
        }
        else if (answerDataKeyboard[3] == 31) //Q3-1, 풀키배열키보드추천하기
        {
            SaveKeyboardmbtiResult_size =
                `
           <h2>당신의 키보드 배열타입은 풀키배열입니다!</h2>
           <h3>하지만 단축배열은 어떠신가요? 들고다니기 좋아요.</h3>
           `;
            set_WebStorage_value += "풀키(OR단축배열)+"
        }
        else if (answerDataKeyboard[3] == 32) //Q3-2, 텐키리스추천하기
        {
            SaveKeyboardmbtiResult_size =
                `
           <h2>당신의 키보드 배열타입은 텐키리스배열입니다!</h2>
           <h3>하지만 단축배열은 어떠신가요? 들고다니기 좋아요</h3>
           `;
            set_WebStorage_value += "텐키리스(OR단축배열)+"
        }
        else {
            alert('(주의!) 예상치 못한 오류입니다. (오류내용: 배열을 추천하지 못했습니다.)');
        }
        //두번째 page 스위치에 대한 결과값 출력
        if (answerDataKeyboard[4] == 41 && answerDataKeyboard[2] == 21) //청축추천 + 저소음추천
        {
            SaveKeyboardmbtiResult_switch =
                `
           <h2>당신의 스위치 타입은 청축입니다!</h2>
           청축스위치는 찰칵이는 소리가 나는 스위치입니다.<p>
           <h3>하지만 회사/사무실에서 쓰려면 저소음스위치를 추천합니다.</h3>

           `;
            set_WebStorage_value += "청축(OR저소음)+"
        }
        else if (answerDataKeyboard[4] == 42 && answerDataKeyboard[2] == 21) //갈축추천 + 저소음추천
        {
            SaveKeyboardmbtiResult_switch =
                `
           <h2>당신의 스위치 타입은 갈축입니다!</h2>
           갈축스위치는 누를때 걸리는 느낌이 나는 스위치입니다.<p>
           <h3>하지만 회사/사무실에서 쓰려면 저소음스위치를 추천합니다.</h3>
           `;
            set_WebStorage_value += "갈축(OR저소음)+"
        }
        else if (answerDataKeyboard[4] == 43 && answerDataKeyboard[2] == 21) //적축추천 + 저소음추천
        {
            SaveKeyboardmbtiResult_switch =
                `
           <h2>당신의 스위치 타입은 적축입니다!</h2>
           적축스위치는 걸리는 소리와 느낌을 모두 없앤 부드러운 스위치입니다.<p>
           <h3>하지만 회사/사무실에서 쓰려면 저소음스위치를 추천합니다.</h3>
           `;
            set_WebStorage_value += "적축(OR저소음)+"
        }
        else if (answerDataKeyboard[4] == 41) //청축추천
        {
            SaveKeyboardmbtiResult_switch =
                `
           <h2>당신의 스위치 타입은 청축(클리커스위치)입니다!</h2>
           `;
            set_WebStorage_value += "청축+"
        }
        else if (answerDataKeyboard[4] == 42) //갈축추천
        {
            SaveKeyboardmbtiResult_switch =
                `
           <h2>당신의 스위치 타입은 갈축(택타일, 넌클릭스위치)입니다!</h2>
           `;
            set_WebStorage_value += "갈축+"
        }
        else if (answerDataKeyboard[4] == 43) //적축추천
        {
            SaveKeyboardmbtiResult_switch =
                `
           <h2>당신의 스위치 타입은 적축(리니어스위치)입니다!</h2>
           `;
            set_WebStorage_value += "적축+"
        }
        else {
            alert('(주의!) 예상치 못한 오류입니다. (오류내용: 스위치를 추천하지 못했습니다.)');
        }
        //세번째 page 연결방식에 대한 결과값 출력

        if (answerDataKeyboard[6] == 61 && answerDataKeyboard[5] == 51) //유선추천 + 블루투스
        {
            SaveKeyboardmbtiResult_connect =
                `
           <h2>당신의 키보드연결방식은 유선연결입니다!</h2>
           <h3>그리고, 블루투스가 같이 있는 것이 좋겠습니다. 다른 장치와 같이 쓰세요.</h3>
           `;
            set_WebStorage_value += "유선(&블루투스)+"
        }
        else if (answerDataKeyboard[6] == 62 && answerDataKeyboard[5] == 51) //무선추천 + 블루투스
        {
            SaveKeyboardmbtiResult_connect =
                `
           <h2>당신의 키보드연결방식은 무선연결입니다!</h2>
           <h3>그리고, 블루투스가 같이 있는 것이 좋겠습니다.  다른 장치와 같이 쓰세요.</h3>
           `;
            set_WebStorage_value += "무선(&블루투스)+"
        }
        else if (answerDataKeyboard[6] == 61) //유선추천
        {
            SaveKeyboardmbtiResult_connect =
                `
           <h2>당신의 키보드연결방식은 유선연결입니다!</h2>
           `;
            set_WebStorage_value += "유선+"
        }
        else if (answerDataKeyboard[6] == 62) //무선추천
        {
            SaveKeyboardmbtiResult_connect =
                `
           <h2>당신의 키보드연결방식은 무선연결입니다!</h2>
           `;
            set_WebStorage_value += "무선+"
        }
        else {
            alert('(주의!) 예상치 못한 오류입니다. (오류내용: 키보드연결방식을 추천하지 못했습니다.)');
        }
        //네번째 page 연결방식에 대한 결과값 출력
        if (answerDataKeyboard[7] == 71) //아트키캡추천
        {
            SaveKeyboardmbtiResult_keycap =
                `
           <h2>당신에게 어울리는 키캡디자인은 Art키캡입니다!</h2>
           `;
            set_WebStorage_value += "Art디자인키캡"
        }
        else if (answerDataKeyboard[7] == 72) //투톤키캡추천
        {
            SaveKeyboardmbtiResult_keycap =
                `
           <h2>당신에게 어울리는 키캡디자인은 투톤컬러키캡입니다!</h2>
           `;
            set_WebStorage_value += "투톤컬러키캡"
        }
        else if (answerDataKeyboard[7] == 73) //단색키캡추천
        {
            SaveKeyboardmbtiResult_keycap =
                `
           <h2>당신에게 어울리는 키캡디자인은 단색키캡입니다!</h2>
           `;
            set_WebStorage_value += "단색키캡"
        }
        else {
            alert('(주의!) 예상치 못한 오류입니다. (오류내용: 키캡을 추천하지 못했습니다.)');
        }
        SaveKeyboardmbtiResult_recommnadKeyboard = //키보드 추천하기. 개발 중
            `
       <p>
       `
        SaveKeyboardmbtiResult_end = //검사결과 하단부분
            `
       <p><p><h3>결과가 만족스러우신가요?</h3><p>
       출력된 결과를 웹스토리지에 저장하세요. 나중에 확인할 수 있습니다.<P>
       <p><table>
            <tr>
                <td>MBTI결과 제목 결과 + 입력칸.</td>
                <td><input id="output_key_textbox"></td>
            </tr>
            <tr>
                <td>MBTI결과 내용 결과 + 입력칸.</td>
                <td><input id="output_value_textbox"></td>
            </tr>
       </table>
       <p><button onclick="saveOutputMbtiData_inMBTI()">Save MBIT data to WebStorage</button>
       <p>저장된 결과를 보고싶으시면 아래의 버튼을 눌러 이동할 수 있습니다.
       <p><a href="#" onclick="PageStart_keyboardStorage_html()" class="button">Go to DataPage</a>
       <p>좌측 사이드 메뉴에서 결과에 대한 내용을 더 상세하게 알아볼 수 있습니다.<p>
       <a href="#" class="button primary">Top</a>
       <hr class="major" />
       `;
        alert("결과가 나왔습니다! 페이지 아래에서 확인하세요.");
        //최종결과출력
        document.getElementById('part_Output_Keyboardmbti_start').innerHTML = SaveKeyboardmbtiResult_start;
        document.getElementById('part_Output_Keyboardmbti_size').innerHTML = SaveKeyboardmbtiResult_size;
        document.getElementById('part_Output_Keyboardmbti_switch').innerHTML = SaveKeyboardmbtiResult_switch;
        document.getElementById('part_Output_Keyboardmbti_connect').innerHTML = SaveKeyboardmbtiResult_connect;
        document.getElementById('part_Output_Keyboardmbti_keycap').innerHTML = SaveKeyboardmbtiResult_keycap;
        document.getElementById('part_Output_Keyboardmbti_recommnadKeyboard').innerHTML = SaveKeyboardmbtiResult_recommnadKeyboard;
        document.getElementById('part_Output_Keyboardmbti_end').innerHTML = SaveKeyboardmbtiResult_end;
        //웹스토리지에 저장할 값 변수로 쌓기.
        let today = new Date(); //시간 가져오기
        let year = today.getFullYear(); //년
        let month = today.getMonth() + 1 //월
        let date = today.getDate(); // 일
        let hours = today.getHours(); //시
        let minutes = today.getMinutes(); //분
        let seconds = today.getSeconds(); //초
        set_WebStorage_key = year + '년' + month + '월' + date + '일' + hours + '시' + minutes + '분' + seconds + '초';
    }
    else //오류체크
    {
        alert("(경고!)예상치 못한 결과입니다. 관리자에게 문의하세요.(경고!)");
    }
    set_WebStorage_DataSet(set_WebStorage_key, set_WebStorage_value);
}
function set_WebStorage_DataSet(data_Show_WebStorageKey, data_Show_WebStorageValue) {
    //두 값을 받아서 자동으로 웹스토리지창에 넣기. (시간,결과)
    document.getElementById('output_key_textbox').value = data_Show_WebStorageKey
    document.getElementById('output_value_textbox').value = data_Show_WebStorageValue
}
function saveOutputMbtiData_inMBTI() //결과로 나오는 값을 웹스토리지에 쉽게 저장하게 설정해놓기.
{
    const get_result_key = document.getElementById('output_key_textbox').value;
    const get_result_value = document.getElementById('output_value_textbox').value;
    localStorage.setItem(get_result_key, get_result_value);
    alert("MBTI결과가 저장되었습니다. 제목:" + get_result_key + "/ 내용:" + get_result_value);
}


//------------------------------------------------------------------------------------------------------
//#페이지 [이미지 조립해보기] imageShopping
function PageStart_imageShopping_html() //main index의 페이지 불러오는 함수.
{
    document.getElementById('Page_index_html').innerHTML = Page_imageShopping_html_code;
}
var Page_imageShopping_html_code =
    `
<section>
<header class="main">
    <h1>Image Based keyboard assembly</h1>
    <p>텍스트와 스펙시트를 기반으로한 기계식키보드의 조립을 넘어 이미지를 중심으로 조립해 볼 수 있습니다.</p>
</header>
<hr class="major" />
<div id="part_Show_assemblyOutput">"아래의 구성을 선택하시고 Show Result 버튼을 눌러주세요."</div>
<p></p>
<hr class="major" />
<h2>구성 선택</h2>
<h3>1. 배열</h3>
<p>사용하고 싶은 키보드의 레이아웃을 선택하세요.</p>
<p>
<div class="col-4 col-12-small">
    <img src="images/Imagemake/fullsize_keyboardKit.PNG" width="50%" height="50%">
    <p>
        <input type="radio" id="Answer_imageShopping_layout_fullkey"
            name="Question_imageShopping_layout" value="Answer_1_fullkey"
            onclick="imageShopping_choice_fullsize()">
        <label for="Answer_imageShopping_layout_fullkey">배열-1. 풀사이즈 키보드.</label>
</div>
<div class="col-4 col-12-small">
    <img src="images/Imagemake/tenkeyless_keyboardKit.jpg" width="40%" height="40%">
    <p>
        <input type="radio" id="Answer_imageShopping_layout_tenkeyless"
            name="Question_imageShopping_layout" value="Answer_2_tenkeyless"
            onclick="imageShopping_choice_tenkeyless()">
        <label for="Answer_imageShopping_layout_tenkeyless">배열-2. 텐키리스 키보드.</label>
</div>
</p>
<p>
    <hr class="major" />
<p>
<h3>2. 스위치 선택</h3>
<p>사용하고 싶은 스위치를 선택하세요.</p>
<p>
<div class="col-4 col-12-small">
    <img src="images/Imagemake/청축.PNG" width="auto" height="auto">
    <p>
        <input type="radio" id="Answer_imageShopping_Switch_Blue"
            name="Question_imageShopping_Switch" value="Answer_1_BlueSwitch"
            onclick="imageShopping_choice_BlueSwitch()">
        <label for="Answer_imageShopping_Switch_Blue">스위치-1. 클리커스위치(청축).</label>
</div>
<div class="col-4 col-12-small">
    <img src="images/Imagemake/갈축.PNG" width="auto" height="auto">
    <p>
        <input type="radio" id="Answer_imageShopping_Switch_Brown"
            name="Question_imageShopping_Switch" value="Answer_2_BrownSwitch"
            onclick="imageShopping_choice_BrownSwitch()">
        <label for="Answer_imageShopping_Switch_Brown">스위치-2. 택타일/넌클릭스위치(갈축).</label>
</div>
<div class="col-4 col-12-small">
    <img src="images/Imagemake/적축.png" width="auto" height="auto">
    <p>
        <input type="radio" id="Answer_imageShopping_Switch_Red"
            name="Question_imageShopping_Switch" value="Answer_3_RedSwitch"
            onclick="imageShopping_choice_RedSwitch()">
        <label for="Answer_imageShopping_Switch_Red">스위치-3. 리니어스위치(적축).</label>
</div>
<div class="col-4 col-12-small">
    <img src="images/Imagemake/저소음적축.PNG" width="auto" height="auto">
    <p>
        <input type="radio" id="Answer_imageShopping_Switch_Silent"
            name="Question_imageShopping_Switch" value="Answer_4_SilentSwitch"
            onclick="imageShopping_choice_SilentSwitch()">
        <label for="Answer_imageShopping_Switch_Silent">스위치-3. 저소음적축스위치.</label>
</div>
</p>
<a href="#" class="button primary" onclick="showResultImageShopping()">Show Result</a>
<hr class="major" />
</section>
`;



var resultForLayout = 'choiceYet'; //배열선택 저장 변수
var resultForSwitch = 'choiceYet'; //스위치선택 저장 변수
var resultToImageShopping = ''; //결과 HTML 입력
function imageShopping_choice_fullsize() {
    resultForLayout = 'fullkey';
}
function imageShopping_choice_tenkeyless() {
    resultForLayout = 'tenkeyless';
}
function imageShopping_choice_BlueSwitch() {
    resultForSwitch = 'Blue';
}
function imageShopping_choice_BrownSwitch() {
    resultForSwitch = 'Brown';
}
function imageShopping_choice_RedSwitch() {
    resultForSwitch = 'Red';
}
function imageShopping_choice_SilentSwitch() {
    resultForSwitch = 'Silent';
}
function showResultImageShopping() {
    if (resultForLayout == 'choiceYet' || resultForSwitch == 'choiceYet') //결과: 안고름 / 안고름
    {
        alert("항목이 전부 선택되지 않았습니다.")
        resultToImageShopping =
            `
        <h3>미선택된 항목이 있습니다.</h3>
        모든 항목을 선택하시고 결과버튼("Show Result")을 눌러주세요.
        `;
        document.getElementById('part_Show_assemblyOutput').innerHTML = resultToImageShopping;
    }
    else if (resultForLayout == 'fullkey' && resultForSwitch == 'Blue') //결과: 풀키 / 청축
    {
        resultToImageShopping =
            `
        <h3>나의 이미지 조립결과: 풀키배열 & 청축스위치 </h3>
        <b>다음과 같은 키보드가 조립된 이미지와 일치합니다.</b><p>
        <img src="images/Imagemake/FullkeyBlue.PNG"><p>한성컴퓨터 GK200 RAINBOW 게이밍 기계식키보드 (블랙, 청축)</p>
        <a href="http://prod.danawa.com/info/?pcode=16357064&cate=1131635" class="button" target="_blank"">Go to Shop</a>
        <p>#위 추천 결과는 온라인 쇼핑몰 Danawa의 랭킹을 기준으로 합니다.
        <p>다른 추천 내용을 보고싶다면 아래 문항에 다시 선택하고 결과버튼을 누르세요.
        `;
        document.getElementById('part_Show_assemblyOutput').innerHTML = resultToImageShopping;

    }
    else if (resultForLayout == 'tenkeyless' && resultForSwitch == 'Blue') //결과: 텐키리스 / 청축
    {
        resultToImageShopping =
            `
        <h3>나의 이미지 조립결과: 텐키리스 & 청축스위치 </h3>
        <b>다음과 같은 키보드가 조립된 이미지와 일치합니다.</b><p>
        <img src="images/Imagemake/TenkeylessBlue.PNG"><p>CHERRY G80-3000S TKL (블랙, 청축)</p>
        <a href="http://prod.danawa.com/info/?pcode=12285653&cate=1131635" class="button" target="_blank"">Go to Shop</a>
        <p>#위 추천 결과는 온라인 쇼핑몰 Danawa의 랭킹을 기준으로 합니다.
        <p>다른 추천 내용을 보고싶다면 아래 문항에 다시 선택하고 결과버튼을 누르세요.
        `;
        document.getElementById('part_Show_assemblyOutput').innerHTML = resultToImageShopping;

    }
    else if (resultForLayout == 'fullkey' && resultForSwitch == 'Brown') //결과: 풀키 / 갈축
    {
        resultToImageShopping =
            `
        <h3>나의 이미지 조립결과: 풀키배열 & 갈축스위치 </h3>
        <b>다음과 같은 키보드가 조립된 이미지와 일치합니다.</b><p>
        <img src="images/Imagemake/FullkeyBrown.PNG"><p>웨이코스 씽크웨이 토체프 D&T 콜라보 체리 키보드 (파스텔블루, 갈축)</p>
        <a href="http://prod.danawa.com/info/?pcode=9537354&cate=1131635" class="button" target="_blank"">Go to Shop</a>
        <p>#위 추천 결과는 온라인 쇼핑몰 Danawa의 랭킹을 기준으로 합니다.
        <p>다른 추천 내용을 보고싶다면 아래 문항에 다시 선택하고 결과버튼을 누르세요.
        `;
        document.getElementById('part_Show_assemblyOutput').innerHTML = resultToImageShopping;

    }
    else if (resultForLayout == 'tenkeyless' && resultForSwitch == 'Brown') //결과: 텐키리스 / 갈축
    {
        resultToImageShopping =
            `
        <h3>나의 이미지 조립결과: 텐키리스 & 갈축스위치 </h3>
        <b>다음과 같은 키보드가 조립된 이미지와 일치합니다.</b><p>
        <img src="images/Imagemake/TenkeylessBrown.PNG"><p>COX CK87 블랙 게이트론 LED 게이밍 기계식 (갈축)</p>
        <a href="http://prod.danawa.com/info/?pcode=7938454&cate=1131635" class="button" target="_blank"">Go to Shop</a>
        <p>#위 추천 결과는 온라인 쇼핑몰 Danawa의 랭킹을 기준으로 합니다.
        <p>다른 추천 내용을 보고싶다면 아래 문항에 다시 선택하고 결과버튼을 누르세요.
        `;
        document.getElementById('part_Show_assemblyOutput').innerHTML = resultToImageShopping;

    }
    else if (resultForLayout == 'fullkey' && resultForSwitch == 'Red') //결과: 풀키 / 적축
    {
        resultToImageShopping =
            `
        <h3>나의 이미지 조립결과: 풀키배열 & 적축스위치 </h3>
        <b>다음과 같은 키보드가 조립된 이미지와 일치합니다.</b><p>
        <img src="images/Imagemake/FullkeyRed.PNG"><p>앱코 HACKER K640 축교환 게이밍 기계식 블랙 (적축)</p>
        <a href="http://prod.danawa.com/info/?pcode=5040324&cate=1131635" class="button" target="_blank"">Go to Shop</a>
        <p>#위 추천 결과는 온라인 쇼핑몰 Danawa의 랭킹을 기준으로 합니다.
        <p>다른 추천 내용을 보고싶다면 아래 문항에 다시 선택하고 결과버튼을 누르세요.
        `;
        document.getElementById('part_Show_assemblyOutput').innerHTML = resultToImageShopping;

    }
    else if (resultForLayout == 'tenkeyless' && resultForSwitch == 'Red') //결과: 텐키리스 / 적축
    {
        resultToImageShopping =
            `
        <h3>나의 이미지 조립결과: 텐키리스 & 적축스위치 </h3>
        <b>다음과 같은 키보드가 조립된 이미지와 일치합니다.</b><p>
        <img src="images/Imagemake/TenkeylessRed.PNG"><p>COX CK01 TKL (적축)</p>
        <a href="http://prod.danawa.com/info/?pcode=14440445&cate=1131635" class="button" target="_blank"">Go to Shop</a>
        <p>#위 추천 결과는 온라인 쇼핑몰 Danawa의 랭킹을 기준으로 합니다.
        <p>다른 추천 내용을 보고싶다면 아래 문항에 다시 선택하고 결과버튼을 누르세요.
        `;
        document.getElementById('part_Show_assemblyOutput').innerHTML = resultToImageShopping;

    }
    else if (resultForLayout == 'fullkey' && resultForSwitch == 'Silent') //결과: 풀키 / 저소음적축
    {
        resultToImageShopping =
            `
        <h3>나의 이미지 조립결과: 풀키배열 & 저소음적축스위치 </h3>
        <b>다음과 같은 키보드가 조립된 이미지와 일치합니다.</b><p>
        <img src="images/Imagemake/FullkeySilent.PNG"><p>레오폴드 FC900RBT PD 그라파이트 블루 한글 (저소음 적축)</p>
        <a href=http://prod.danawa.com/info/?pcode=16200131&cate=1131635" class="button" target="_blank"">Go to Shop</a>
        <p>#위 추천 결과는 온라인 쇼핑몰 Danawa의 랭킹을 기준으로 합니다.
        <p>다른 추천 내용을 보고싶다면 아래 문항에 다시 선택하고 결과버튼을 누르세요.
        `;
        document.getElementById('part_Show_assemblyOutput').innerHTML = resultToImageShopping;

    }
    else if (resultForLayout == 'tenkeyless' && resultForSwitch == 'Silent') //결과: 텐키리스 / 저소음적축
    {
        resultToImageShopping =
            `
        <h3>나의 이미지 조립결과: 텐키리스 & 저소음적축스위치 </h3>
        <b>다음과 같은 키보드가 조립된 이미지와 일치합니다.</b><p>
        <img src="images/Imagemake/TenkeylessSilent.PNG"><p>레오폴드 FC750RBT PD 그레이 블루 한글 (저소음 적축)</p>
        <a href="http://prod.danawa.com/info/?pcode=15353501&cate=1131635" class="button" target="_blank"">Go to Shop</a>
        <p>#위 추천 결과는 온라인 쇼핑몰 Danawa의 랭킹을 기준으로 합니다.
        <p>다른 추천 내용을 보고싶다면 아래 문항에 다시 선택하고 결과버튼을 누르세요.
        `;
        document.getElementById('part_Show_assemblyOutput').innerHTML = resultToImageShopping;

    }
    else // 예외상황 대비
    {
        part_Show_assemblyOutput =
            `
        <h3>미지정 오류발생!</h3>
        관리자에게 신고하세요!!!! 
        `;
    }
}







//------------------------------------------------------------------------------------------------------
//#페이지 [내가 찾은 키보드 목록 보기] keyboardStorage
function PageStart_keyboardStorage_html() //main index의 페이지 불러오는 함수.
{
    document.getElementById('Page_index_html').innerHTML = Page_keyboardStorage_html_code;
    LoadLocalStorageData_StoragePage();
}
var Page_keyboardStorage_html_code =
    `
<section>
<header class="main">
    <h1>나의 저장된 기계식키보드 정보 보기.</h1>
</header>
<img src="images/카트이미지.PNG" width="30%" height="30%" />
<p>
    해당 페이지에서 저장해놓았던 기계식키보드에 대해서 다시 볼 수 있습니다.
    <hr class="major" />
<h2>Save / load</h2>
<table>
    <th>명칭</th> <!-- key값 -->
    <th>내용</th> <!-- value -->
    <th>컨트롤 버튼</th>
    <tr>
        <td><input id="wirte_Webstoragedata_key"></td>
        <td><input id="wirte_Webstoragedata_value"></td>
        <td><a href="#" class="button" onclick="SaveLocalStorageData_StoragePage()">Save</a></td>
    </tr>
    <tr>
        <td><input id="wirte_Webstoragedata_DeleteKey" onkeyup="find_LocalStorageData_ToDelete()">
        </td>
        <td>
            <div id="Show_Webstoragedata_value">좌측에 저장된 키값을 넣으세요.</div>
        </td>
        <td><a href="#" class="button" onclick="DeleteLocalStorageData_StoragePage()">Delete</a>
        </td>
    </tr>
</table>
<div id="part_showWebLocalStorageData_start"></div>
<div id="part_showWebLocalStorageData_table"></div>
<div id="part_showWebLocalStorageData_end"></div>
<div id="part_showWebLocalStorageData_Date"></div>
<a href="#" class="button">Top</a>
<a class="button" onclick="LoadLocalStorageData_StoragePage()">Manual load&ReLoad</a>
<a class="button primary" onclick="clearAllLocalStorageData()">(Caution) Delete All Data</a>
<p></p>
</section>
`;

window.onload = function KeyboardStorage_When_started() //페이지 처음에 키면 데이터 load 하기.
{
    LoadLocalStorageData_StoragePage();
}
let target_deleteKey //삭제할 경우 지정되는 키값
function SaveLocalStorageData_StoragePage() //웹스토리지 저장시키기
{
    let SaveKeyTolocalStorageData = document.getElementById('wirte_Webstoragedata_key').value;
    let SavevalueTolocalStorageData = document.getElementById('wirte_Webstoragedata_value').value;
    localStorage.setItem(SaveKeyTolocalStorageData, SavevalueTolocalStorageData);
    alert("데이터가 저장됩니다. :" + SaveKeyTolocalStorageData + "/" + SavevalueTolocalStorageData);
    LoadLocalStorageData_StoragePage(); //데이터 다시 불러오기 기능
}
function find_LocalStorageData_ToDelete() {
    target_deleteKey = document.getElementById('wirte_Webstoragedata_DeleteKey').value;
    let show_valueToDelete = localStorage.getItem(target_deleteKey);
    document.getElementById("Show_Webstoragedata_value").innerText = show_valueToDelete;
    LoadLocalStorageData_StoragePage();
}
function DeleteLocalStorageData_StoragePage() //특정 키값에 따른 데이터 삭제
{
    localStorage.removeItem(target_deleteKey);
    alert(target_deleteKey + '의 값이 삭제되었습니다.');
    document.getElementById("Show_Webstoragedata_value").innerText = "";
    LoadLocalStorageData_StoragePage(); //데이터 다시 불러오기 기능
}
function LoadLocalStorageData_StoragePage() //스토리지 데이터 다시 가져오기
{
    let output_LocalStorageData_start; //출력하는 로컬웹스토리지 테이블의 시작 내용
    let output_LocalStorageData_table; //출력하는 로컬웹스토리지  테이블의 반복되는 중간 내용
    let output_LocalStorageData_end; //출력하는 로컬웹스토리지  테이블의 끝 내용
    let output_LocalStorageData //출력될 내용 전체 합치기.
    let localStorage_i_key; //반복문 출력하는 순서 맞추기. value출력전용
    let Storage_key; //키 저장하는 변수
    let Storage_value; //값 저장하는 변수
    output_LocalStorageData_start =
        `
    <h2>WebStorage에 저장된 정보</h2>
    <table>
        <th>명칭</th> <!-- key값 -->
        <th>내용</th> <!-- value -->
    `;
    output_LocalStorageData_table =
        `
    `
        ;
    for (localStorage_i = 0; localStorage_i < localStorage.length; localStorage_i++) {
        //alert(localStorage.key(localStorage_i)); //키값 가져오기 == key
        localStorage_i_key = localStorage.key(localStorage_i); //키값을 변수로 가져오기, 값을 찾기위해서!
        //alert(localStorage.getItem(localStorage_i_key)); //변수"키값"을 통해 값 가져오기 == value
        Storage_key = String(localStorage.key(localStorage_i)); //key를 변수화 함
        Storage_value = String(localStorage.getItem(localStorage_i_key)); //value를 변수화 함
        output_LocalStorageData_table += '<tr><td>' + Storage_key + '</td><td>' + Storage_value + '</td></tr>';
    }
    output_LocalStorageData_end =
        `
    </table>
    갱신된 시간:
    `;
    output_LocalStorageData = output_LocalStorageData_start + output_LocalStorageData_table + output_LocalStorageData_end; //
    document.getElementById('part_showWebLocalStorageData_table').innerHTML = output_LocalStorageData; //저장된 데이터 테이블 출력
    let today = new Date(); //시간 가져오기
    let year = today.getFullYear(); //년
    let month = today.getMonth() + 1 //월
    let date = today.getDate(); // 일
    let hours = today.getHours(); //시
    let minutes = today.getMinutes(); //분
    let seconds = today.getSeconds(); //초
    set_WebStorage_Time = year + '년' + month + '월' + date + '일' + hours + '시' + minutes + '분' + seconds + '초';
    document.getElementById('part_showWebLocalStorageData_Date').innerHTML = set_WebStorage_Time; //갱신된 시간출력
}
function clearAllLocalStorageData() //알림 및 전체 저장된 스토리지 자료 삭제
{
    if (!confirm("모든 키보드 저장정보가 삭제됩니다. 삭제하시겠습니까? (HTML . LocalStorageData).")) {
        alert("LocalStorageData의 삭제가 취소되었습니다.");
    } else {
        localStorage.clear()
        alert("LocalStorageData의 정보가 전부 삭제되었습니다..");
    }
    LoadLocalStorageData_StoragePage();
}



//------------------------------------------------------------------------------------------------------
//#페이지 [키캡의 종류] variationKeycaps
function PageStart_variationKeycaps_html() //main index의 페이지 불러오는 함수.
{
    document.getElementById('Page_index_html').innerHTML = Page_variationKeycaps_html_code;
}
var Page_variationKeycaps_html_code =
    `
<section>
					<header class="main">
						<h1>What is Keycap? <P></P> 키캡에는 어떤 특징이 있는가</h1>
						<h4>목차</h4>
						<ol>
							<li><a href="#keycap_whatis">키캡이란?</a></li>
							<li><a href="#keycap_texture">키캡의 재질, 플라스틱에 한해서..</a></li>
							<li><a href="#keycap_height">키캡의 높이, 단일 키캡의 높이</a></li>
							<li><a href="#keycap_steps">스탭스컬쳐, 곡률에 대해서</a></li>
							<li><a href="#keycap_write">각인, 글씨를 새기는 방식</a></li>
						</ol>
					</header>
					<hr class="major" />
					<a id="keycap_whatis"></a>
					<h2>키캡이란 무엇인가?</h2>
					<p>키캡이란 키보드 스위치 위를 덮고 있는 플라스틱 캡을 말합니다. 키캡의 상단에는 문자가 인쇄되어 있어 키보드의 각 스위치가 어떤 작동을 하는지 알려주는 기능을 하기도 합니다.<p></p>
					재질과 각인방식, 제조사에 따라 그 특성과 가격, 촉감 등이 천차만별로 다르지만 꼭 필요한 상품은 아니기 때문에 주로 일부 매니아층 사이에서 구매가 이뤄지고 있습니다.<p></p>
					키캡의 재질은 플라스틱의 일종인 ABS와 PBT가 주로 사용됩니다. 평균적으로 ABS는 표면이 매끈하고 키캡이 얇아 가벼운 편이고 PBT는 약간 거친 느낌이 난다고 하지만 이는 제조사의 공정에 따라 달라질 수 있는 부분으로 재질자체의 특성이라고 보긴 어렵습니다. 가격은 PBT키캡이 더 비싼 편이며 수명도 더 길다고 알려져 있습니다.<p></p>
					키캡은 각인 방식에 따라서도 나뉩니다. 이중사출 또는 Double Shot으로도 불리우는 이색사출, 레이저 각인, 실크인쇄 등이 있습니다. </p>
					<hr class="major" />
					<a id="keycap_texture"></a>
					<h2>키캡의 재질, 플라스틱에 한하여</h2>
					<span class="image main"><img src="images/guideSwitch/재질비교안내.png"/></span>
					<p>키캡의 재질은 주된 재질로 플라스틱을 사용하며 그중 ABS 재질과 PBT재질이 가장 자주 사용됩니다.</p>
					<a href="#" class="button primary">Top</a>
					<hr class="major" />
					<a id="keycap_height"></a>
					<h2>키캡의 높이, 단일 키캡이 가지는 높이에 대해서</h2>
					<span class="image main"><img src="images/guideSwitch/키캡높이안내.PNG" /></span>
					<p>키캡은 설계표준에 따라 다른 곡률을 주는데 곡률을 아예 없애는 것 부터 높이를 조정하는 방식 등이 있습니다.</p>
					<span class="image main"><img src="images/guideSwitch/키캡의 위치별 높이 안내.PNG" /></span>
					<p>키캡의 높이 디자인 때문에 위와 같이 곡률을 주게 되어 키보드 위치에 따라 다른 높이가 설정됩니다.</p>
					<a href="#" class="button primary">Top</a>
					<hr class="major" />
					<a id="keycap_steps"></a>
					<h2>스탭스컬쳐, 키보드 자체의 곡률에 대해서</h2>
					<span class="image main"><img src="images/guideSwitch/스탭스컬쳐안내.PNG" /></span>
					<p>스탭스컬쳐는 키보드의 전체적으로 들어가는 곡률이며 키캡과 키보드의 형상에 의하여 구성됩니다.</p>
					<a href="#" class="button primary">Top</a>
					<hr class="major" />
					<a id="keycap_write"></a>
					<h2>각인, 글씨를 새기는 방식에 대해서</h2>
					<span class="image main"><img src="images/guideSwitch/각인안내.png" /></span>
					<p>키캡에는 글씨를 새겨 어떤 키인지 알 수 있게 해주는데 각인을 새기는 방식은 여러 방식이 있습니다.</p>
					<span class="image main"><img src="images/guideSwitch/이중사출안내.jpg" /></span>
					<p>이중사출키캡은 PBT재질에서 자주 사용되는 방식이며 2개의 형상을 결합하여 만듭니다. 키캡이 상단에서 문질러져도 깍여도, 글씨를 유지합니다.</p>
					<span class="image main"><img src="images/guideSwitch/염료승화안내.png" /></span>
					<p>염료승화방식은 PBT재질에서만 할 수 있는 방식으로 고온으로 염색하여 글씨를 새깁니다. 내부까지 색상이 들어갑니다.</p>
					<a href="#" class="button primary">Top</a>
					<hr class="major" />
				</section>
`;



//------------------------------------------------------------------------------------------------------
//#페이지 [추천 하는 키캡] recommendationKeycaps page
function PageStart_recommendationKeycaps_html() {
    document.getElementById('Page_index_html').innerHTML = Page_recommendationKeycaps_html_code;
}
var Page_recommendationKeycaps_html_code =
    `
<header class="main" id="pageTop_findKeycap">
<h1>나에게 어울리는 키캡 찾기</h1>
</header>
<span class="image main"><img src=""/></span>
<p>Color Keycaps: 색상을 테마로 한 키캡
<ul class="actions fit">
    <li><a href="#" class="button primary fit" onclick="selectKeycapColor_SolidColor()">Solid-color</a></li>
    <li><a href="#" class="button primary fit" onclick="selectKeycapColor_twoTon()">two-ton</a></li>
    <li><a href="#" class="button primary fit" onclick="selectKeycapColor_ColorFull()">Colorfull</a></li>
</ul>
</p>
<p>Concept Keycaps: 디자인, 이미지, 재질을 테마로 한 키캡
<ul class="actions fit">
    <li><a href="#" class="button primary fit" onclick="selectKeycapConcept_gradation()">gradation</a></li>
    <li><a href="#" class="button primary fit" onclick="selectKeycapConcept_Art()">Art</a></li>
    <li><a href="#" class="button primary fit" onclick="selectKeycapConcept_specialMaterial()">special material</a></li>
</ul>
</p>
<hr class="major" />
<div id="part_Output_SelectKeycap"></div> <!--선택된 설명에 대해서 나오는 페이지 부분-->
`;

var htmlText_KeycapColor_SolidColor =
    `
<h2>Solid keycap를 추천합니다!</h2><p>
<h3>단색 키캡은 어디서나 무난하게 쓸 수 있고 정적인 느낌을 주는 키보드의 키캡 디자인입니다.</h3><p>
<img src="images/keycaps/블랙단색.PNG" width="70%" height="70%"><p>
↑ 검정삭 단색 키캡<p>
일반적인 검정색 단색 키캡입니다.<p>
이러한 일반적인 단색 키캡은 기계식키보드를 구매할 때 가장 보편적으로 장착되어 판매됩니다.<p><p>
<img src="images/keycaps/장착단색키캡.PNG" width="70%" height="70%"><p>
↑ 노란색, 연두색, 빨간색 단일 색상키캡<p>
단일색상의 키캡에는 하얀색고 검정색이 제일 많지만 밝은 색상의 키캡도 있습니다.<p>
<a href="#" class="button primary">Top</a>
<hr class="major" />
`;
var htmlText_KeycapColor_twoTon =
    `
<h2>Twoton keycap를 추천합니다!</h2><p>
<h3>2개 내지는 적은 수의 색상이 사용된 키보드는 간결하면서 깔끔하면서도 소소한 화려함이 있습니다.</h3><p>
<img src="images/keycaps/화이트핑크투톤.png" width="70%" height="70%"><p>
↑ "화이트 & 핑크"로 구성된 투톤 키캡<p>
2가지의 색상을 혼합하면 키보드의 디자인과 시각적 실용성이 개선됩니다. <p>
혼합되는 색상은 다양하게 적용될 수 있습니다.<p>
<a href="#" class="button primary">Top</a>
<hr class="major" />
`;
var htmlText_KeycapColor_ColorFull =
    `
<h2>Mulity Color keycap를 추천합니다!</h2><p>
<h3>다양한 색상을 혼합한 키캡은 특이한 조합들을 시도 할 수 있습니다.</h3><p>
<img src="images/keycaps/컬러풀키캡바이올렛.PNG" width="70%" height="70%"><p>
↑ Akko사의 퍼플 멀티 컬러 키캡<p>
<img src="images/keycaps/레인보우키캡.PNG" width="70%" height="70%"><p>
↑ 무지개 색상과 파인 각인으로 만들어진 키캡<p>
<a href="#" class="button primary">Top</a>
<hr class="major" />
`;
var htmlText_KeycapColor_gradation =
    `
<h2>Gradation keycap를 추천합니다!</h2><p>
<h3>그라데이션으로 만들어진 색상의 키캡은 미술적인 색감의 농도를 통한 미적가치를 추구합니다.</h3><p>
<img src="images/keycaps/스카이블루그라데이션.png" width="70%" height="70%"><p>
↑보라색부터 하늘색이 감도는 그라데이션 키캡<p>
<img src="images/keycaps/무지개그라데이션.PNG" width="70%" height="70%"><p>
↑다양한 색상으로 그라데이션을 준 무지개그라데이션키캡<p>
<img src="images/keycaps/핑크그라데이션.PNG" width="70%" height="70%"><p>
↑짙은 진홍색과 연한 색상을 혼합한 그라데이션키캡<p>
<a href="#" class="button primary">Top</a>
<hr class="major" />
`;
var htmlText_KeycapColor_Art =
    `
<h2>Art keycap를 추천합니다!</h2><p>
<h3>이미지와 디자인을 가미한 키캡은 예술성과 독특함을 드러낼수 있는 화려한 키캡입니다.</h3><p>
<img src="images/keycaps/고래키캡.PNG" width="70%" height="70%"><p>
↑고래를 테마로 한 투톤 느낌의 키캡<p>
<img src="images/keycaps/매화키캡.PNG" width="70%" height="70%"><p>
↑매화를 테마로한 핑크+화이트 색상의 키캡<p>
<img src="images/keycaps/일본고래키캡.PNG" width="70%" height="70%"><p>
↑일본의 우키요예풍 동양화 느낌과 고래를 혼합한 디자인 키캡<p>
<a href="#" class="button primary">Top</a>
<hr class="major" />
`;
var htmlText_KeycapColor_specialMaterial =
    `
<h2>Spectial Material keycap를 추천합니다!</h2><p>
<h3>재질을 특별하게 만든 키캡들은 기존의 키캡의 스타일과 이미지를 완전히 벗어날 수 있습니다.</h3><p>
<img src="images/keycaps/목재키캡.PNG" width="70%" height="70%"><p>
↑플라스틱이 아닌 목재로 만든 키캡<p>
<img src="images/keycaps/골드알루미늄키캡.PNG" width="70%" height="70%"><p>
↑알루미늄과 금색을 입힌 알루미늄의 키캡<p>
<a href="#" class="button primary">Top</a>
<hr class="major" />
`;
function selectKeycapColor_SolidColor() {
    document.getElementById('part_Output_SelectKeycap').innerHTML = htmlText_KeycapColor_SolidColor;
}
function selectKeycapColor_twoTon() {
    document.getElementById('part_Output_SelectKeycap').innerHTML = htmlText_KeycapColor_twoTon;
}
function selectKeycapColor_ColorFull() {
    document.getElementById('part_Output_SelectKeycap').innerHTML = htmlText_KeycapColor_ColorFull;
}
function selectKeycapConcept_gradation() {
    document.getElementById('part_Output_SelectKeycap').innerHTML = htmlText_KeycapColor_gradation;
}
function selectKeycapConcept_Art() {
    document.getElementById('part_Output_SelectKeycap').innerHTML = htmlText_KeycapColor_Art;
}
function selectKeycapConcept_specialMaterial() {
    document.getElementById('part_Output_SelectKeycap').innerHTML = htmlText_KeycapColor_specialMaterial;
}









//------------------------------------------------------------------------------------------------------
//#페이지 [기계식키보드의 개론] whatisKeyboard.html
function PageStart_whatisKeyboard_html() {
    document.getElementById('Page_index_html').innerHTML = Page_whatisKeyboard_html_code;
}
var Page_whatisKeyboard_html_code =
    `
<section>
					<header class="main">
						<h1>기계식키보드. 입력장치계의 만년필</h1>
					</header>
					<h4>목차</h4>
					<ol>
						<li><a href="#goodPoint">기계식키보드의 장점.</a></li>
						<li><a href="#badPoint">기계식키보드의 단점.</a></li>
						<li><a href="#partOfKeyboard">기계식키보드의 구성요소.</a></li>
					</ol>

					<span class="image main"><img src="" /></span>

					<p>키보드의 한 종류. 기계식 키보드(Mechanical Keyboard)의 정의는 통일되어 있지 않으나 통상적으로 아래의 조건을 모두 만족하면 기계식 키보드로 분류한다.</p>
					<p>축전식이 아닐 것.</p>
					<p>분리되어 있던 금속 접점이 서로 접촉하며 키가 입력되는 방식일 것.</p>
					<p>금속 접점이 분리할 수 있는 스위치 내부에 존재할 것.</p>

					<hr class="major" />

					<a id="goodPoint"></a>
					<h2>기계식 키보드의 장점</h2>
					<span class="image main"><img src="" /></span>
					<b>
						<p>무한 동시 입력</p>
					</b>
					<p>기계식 키보드는 무한 동시 입력을 지원한다. 무한 동시 입력[5] 또는 안티 고스팅(Anti-Ghosting)은 고스팅과 블록킹이 발생하지 않는 상태를 가리킨다.
						고스팅(Ghosting)은 누르지 않은 키와 연결된 회로로 전류가 흘러, 해당 키에서 키가 입력되는 현상을 가리키며, 3개 이상의 키를 동시에 누르면 발생할 수 있다.
						블록킹(Blocking)은 고스팅을 막는 가장 단순한 방법으로, 고스팅을 발생시키는 키 입력을 무시하는 것을 의미한다. 하지만 블록킹은 사용자에게 불편함을 줄 수 있다는
						단점이 있다.[6] 고스팅을 막는 근본적인 방법은 각각의 스위치마다 다이오드를 실장하는 것이다. 다이오드가 실장된 키보드는 누르지 않은 키와 연결된 회로로 전류가 흐르지
						않아 고스팅이 발생하지 않으며, 블록킹이 필요하지 않다. 기계식 키보드는 이러한 방법으로 무한 동시 입력을 지원할 수 있다. 원가를 절감하기 위해 다이오드를 실장하지 않아
						무한 동시 입력이 불가능한 기계식 키보드도 있으나 매우 드물다.

						같은 접점을 이용한 멤브레인 키보드는 기판 대신 멤브레인 시트를 사용하기 때문에 다이오드를 실장하는 것이 어렵고, 실장하더라도 단가가 상당히 높아지는 문제점이 있어 보통의
						멤브레인 키보드는 블록킹을 사용한다. 따라서 멤브레인 키보드는 3개 이상의 키를 동시에 누르면 일부 키에서 키 입력이 되지 않을 수 있다. 이는 멤브레인 시트를 사용하는
						팬터그래프 키보드도 마찬가지다. 이렇게 블록킹이 적용된 상태를 2키 동시 입력이라고 가리킨다.

						멤브레인 키보드 중에는 2키 동시 입력에 추가적인 회로를 배치해 자주 사용되는 키 조합에서만 최대 2키 이상의 동시 입력을 구현하거나, 각각의 키마다 추가적인 회로를 배치해
						키보드 전체에서 2키 이상의 동시 입력을 구현하는 경우도 있다. 이러한 키보드 중에는 과장 광고를 하는 경우가 많아 주의가 필요하다. 예를 들어, 제품 스펙에서는 19키
						동시 입력이 가능하다고 광고하지만, 실제로는 2키 동시 입력에 자주 사용되는 키 조합에서만 19키 동시 입력이 가능한 식이다. 본래 'X키 동시 입력'이라는 용어는 키보드
						전체에서 고스팅과 블록킹을 발생시키지 않고 동시에 입력될 수 있는 키 개수가 최대 X개라는 것을 의미하나, 제조사마다 의미가 통일되지 않아 이와 같이 남용되기도 한다. 일부
						제조사에서는 원래 의미와 구별하기 위해 '최대 X키 동시 입력'이라는 표현을 사용하기도 한다. 무한 동시 입력이 가능한 (아마도 유일한) 멤브레인 키보드로 스카이디지탈의
						NKEY 키보드가 있다. 해당 키보드는 같은 열의 스위치끼리 묶은 후 키보드 컨트롤러가 실장된 기판에 다이오드를 실장하는 방법으로 무한 동시 입력을 구현했다.

						참고로 무한 동시 입력을 지원하지만, 6키 동시 입력을 지원하는 키보드도 있을 수 있다. 이러한 6키 동시 입력은 무한 동시 입력이 가능한 키보드에서 USB 단자의 HID
						프로토콜의 한계로 동시에 입력될 수 있는 키의 개수가 6개로 제한된 상태를 가리킨다. 이러한 6키 동시 입력 상태에서는 Shift, Control, Alt, Windows
						키 중 1개의 키와 그외의 6개의 키가 동시에 입력이 가능하기 때문에, 6+1 키 동시 입력, 10키 동시 입력[7], 14키 동시 입력[8]이라고 표현하기도 한다. 일부
						제조사에서는 USB HID 프로토콜을 수정해 USB로 연결된 상태에서도 무한 동시 입력이 가능하게끔 설계하지만, 이러한 방식은 보안 프로그램 등과 충돌하는 문제점이 있다.
						때문에 이러한 키보드는 일반적으로 단축키 등을 통해 6키 동시 입력과 무한 동시 입력 상태를 전환할 수 있거나, PS2 단자를 사용했을 때만 무한 동시 입력이 가능하게끔
						설계된다. 일부 기계식 키보드는 USB HID 프로토콜을 수정해 동시에 입력될 수 있는 키의 개수 제한을 늘리기도 한다. 예를 들어, 마티아스(Matias) 사의 Quiet
						Pro 키보드는 이러한 방식으로 10키 동시 입력을 지원한다.</p>
					<b>
						<p>편안한 타이핑</p>
					</b>
					<p>보드에서 오버트래블은 빠르게 타이핑을 하는 도중에 실수로 키를 끝까지 누르지 못해 키를 입력하지 못하는 것을 방지하기 위한 인체공학적 설계이다. 기계식 키보드는 오버트래블
						덕분에 키를 바닥까지 눌러줘야 하는 부담감 없이 편안한 타이핑이 가능하다. 멤브레인의 키보드의 단점 중 하나가 바로 이 오버트래블 설계가 없어 타이핑을 할 때 반드시 바닥을
						쳐야 한다는 것이다. 대표적인 기계식 키보드/스위치 제조사인 체리 사의 경우, 홍보 자료에 'Ergonomic overtravel'이라는 표현을 자주 사용하며 오버트래블을
						기계식 키보드의 큰 장점으로 내세우고 있다.</p>
					<b>
						<p>쉬운 수리</p>
					</b>
					<p>기계식 키보드는 수리가 쉽다. 기계식 키보드의 고장 중 대부분을 차지하는 스위치 고장은 새로운 스위치로 교체해주는 것으로 간단히 수리가 가능하다.[9] 기판의 회로가 고장났을
						경우에는 고장난 회로를 와이어로 대체하는 와이어링으로 수리가 가능하다. 전문적으로 키보드를 튜닝하고 수리하는 사설 수리점(일명 공방)에서 수리를 받는 방법도 있다.</p>
					<b>
						<p>커스터마이징</p>
					</b>
					<p>현재 사용되고 있는 거의 모든 기계식 키보드는 체리 MX 스위치와 호환 스위치를 사용하고 있다. 덕분에 기계식 키보드는 키캡, 스위치, 하우징, 보강판 등 호환 가능한 부품을
						구하기 쉽다. 이러한 폭넓은 호환성 덕분에 기계식 키보드는 다양한 커스터마이징이 가능하다.</p>
					<ul class="actions">
						<li><a href="#" class="button primary">Top</a></li>
					</ul>

					<hr class="major" />

					<a id="badPoint"></a>
					<h2>기계식 키보드의 단점</h2>
					<span class="image main"><img src="" /></span>
					<b>
						<p>방수, 방진 문제</p>
					</b>
					<p>기계식 키보드는 광축 키보드와 달리 방수나 방진 처리를 하기 힘들다. 기계식 스위치는 전도성과 물리적인 접촉을 요구하고 금속 접점의 특성상 산화에 취약하므로 액체, 먼지와는
						상극일 수밖에 없다.[10] 일부 스위치의 경우, 일정 정도의 방수, 방진을 구현하기는 하였으나, 물에 담궈도 작동할 수 있는 일부 방수, 방진 무접점, 광축 키보드 등에
						비하면, 방수, 방진 성능이 상대적으로 부족한 편이다. 먼지 관리를 철저하게 해주지 않으면, 쓰지도 않고 보관만 했는데 오작동이 일어나서 어쩔 수 없이 파워 타건을 해야
						하는 골 때리는 상황에 처할 수 있다. 의외로 스위치의 고장 원인은 마모보다는 먼지 문제가 제일 크다. 그나마 체리는 덜하지만, 다른 축을 지닌 키보드들은 이 문제가 상당히
						심하다. 다시 뒤집어 이야기하면 체리의 신뢰성이 높고 가격도 높은 이유가 바로 이 때문이며, 카일과 오테뮤도 사이에 '막'이 존재하는 구조로 만들어서 먼지 유입을 막기 위한
						노력을 하고 있다. 스위치를 공방에 맡겨서 윤활을 요청하거나, 혹은 최소한 주사기 같은 걸로 스위치 내부에 바람을 불어넣어주면 그나마 반푼어치 수리라도 가능하다. 하지만
						이렇게 먼지로 접점이 고장나는 것을 예방하는 가장 좋은 방법은 연속적인 사용을 통해서 내부 접점에 먼지가 쌓일 틈을 안 주는 것이다. 수리방법이 있기는 있는데, 알코올을
						스위치 내부에 가득채운후 연타를해서 마찰세정을 한후, 스위치를 누른채로 키보드를 뒤집어 알코올을 빠져나가게 하며 구정물도 씻어내면 된다.</p>
					<b>
						<p>높이와 손목 건강</p>
					</b>
					<p>기계식 키보드는 멤브레인 또는 팬터그래프 키보드에 비해 높이가 몇 배 이상 높다. 기계식 스위치는 긴 스트로크가 존재하기 때문에 스위치가 높을 수밖에 없고, 여기에 기판 및
						키보드의 하판의 두께까지 더해져 전고가 매우 높아진다. 이렇게 높은 키보드는 손목 건강에 악영향을 줄 수 있다. 기계식 키보드를 사용할 계획이라면 손목 질병 예방을 위해
						팜레스트 사용을 고려해야 하며, 만약 책상 위 공간적 여유 혹은 경제적 여유로 그렇지 못할 경우 다른 종류의 키보드 사용을 생각해 보아야 한다. 모든 신체가 그렇지만, 손목
						건강은 해치기는 쉽지만 회복하기 어려우며, 손목 터널 증후군은 사전 증세 없이 나타날 수 있다.

						이러한 단점을 피하기 위해 체리 및 카일에서는 로우 프로파일(LP) 스위치를 개발하였으나, 소수의 제품(쿨러마스터, 로지텍, 필코 등)에만 적용되었다. LP 스위치는 기존
						하우징, 기판, 키캡 호환이 불가능하여 커스터마이징이 제한되어 있는 상황이고, 주로 일본 쪽에서 제작하는 자작 키보드에서 찾아볼 수 있다.</p>
					<b>
						<p>입력 지연</p>
					</b>
					<p>기계식 스위치의 금속 접점은 두 금속 부품이 붙었다가 떨어지는 과정에서 스스로의 반발력에 의해 진동을 하게 되며, 그 과정에서 전기 신호가 발생하는 구조이므로 오입력이 발생할
						수 있다. 이러한 문제를 막기 위해서는 스위치에 입력이 되고 금속 접점의 진동이 멈출 때까지 해당 스위치의 입력 신호를 의도적으로 무시해야 한다. 이때, 금속 접점의 진동이
						멈출 때까지 걸리는 시간을 바운싱 타임(Bouncing Time)이라고 부르며, 의도적인 입력 신호 지연을 디바운싱(De-bouncing)이라고 부른다. 즉, 디바운싱으로
						인해 기계식 키보드는 키가 눌리고, 바운싱 타임이 지난 후, 입력이 이루어지게 된다. 바운싱 타임은 보통 1~5ms[11]로 매우 짧은 시간이기 때문에, 그 자체가
						사용자에게 불편함을 주는 단점은 아니나, 입력 지연이 이보다 더 짧거나 거의 없는 무접점, 광축 키보드 등과 비교하면, 상대적인 단점이라고 볼 수 있다.</p>
					<b>
						<p>채터링</p>
					</b>
					<p>위에서 언급한 디바운싱을 제대로 설계하지 않았거나, 기계식 스위치의 초기 불량 등으로 바운싱 타임이 설계 값을 초과할 경우, 오입력이 이루어질 수 있으며, 이러한 현상을
						채터링(Chattering)이라고 부른다.[12] 이 때문에 기계식 키보드는 신뢰할 수 있는 제조사에서 설계, 생산된 것을 사용하는 것이 좋다. 최소한의 개념이 있는
						회사라면 간단히 캐퍼시터를 추가해서 회피하거나 혹은 소프트웨어적으로 무시를 하는 방법을 사용한다.</p>
					<b>
						<p>제한적인 입력 신호</p>
					</b>
					<p>기계식 스위치의 입력 신호는 On과 Off밖에 존재하지 않는다. 무접점이나 일부 광축 스위치 등의 경우, 입력 신호가 연속적인 변화량인 덕분에 이를 응용해, 입력 지점을
						바꾸거나 아날로그 입력 기능[13]을 도입할 수 있다. 하지만 기계식 스위치에 이러한 기능을 도입하는 것은 불가능하다. 사용자에게 불편함을 주는 단점은 아니나, 다른 키보드
						방식에 비해, 기능이 제한된다는 점은 단점이다.</p>
					<b>
						<p>짧은 수명</p>
					</b>
					<p>금속 부품으로 이루어진 금속 접점이 붙었다 떨어졌다 하는 과정에서 금속 부품이 손상되어 산화가 발생하는 문제가 있기 때문에 수명이 상대적으로 짧다. 이를 막기 위해 금속
						부품에 도금 처리를 해두기는 했으나, 산화를 완전히 막을 수는 없어 광축 키보드 등에 비하면 수명이 낮다. 보통 기계식 키보드의 수명은 5천만회 ~ 1억 회 입력이지만,
						광축 등의 키보드는 1억 회가 넘는 경우도 있다. 과거 Micro Switch(현 허니웰)에서 제조한 홀 효과 응용 무접점 키보드의 경우, 300억 회의 수명을 달성하기도
						했다.PDF

						그래도 기계식 키보드는 다른 어떠한 방식의 키보드보다 수리용 부품의 수급과 수리가 용이해 큰 단점은 아니다. 또한, 유지, 보수가 가능하다는 측면에서는 기계식 키보드가
						오히려 수명이 가장 긴 키보드일 수도 있다. 무접점과 멤브레인, 팬터그래프 등은 러버돔을 사용하는지라 가만 냅둬도 자연히 러버돔이 세월의 흐름에 따라 경화되기 때문에 키감이
						변하며[14], 광축은 키를 누르는 것과 상관없이 컴퓨터가 켜져 있는 시간에 따라 센서가 소모되기 때문에 하루 8시간을 꾸준히 컴퓨터 켜놓고 타자만 안 치더라도 결국 수명이
						깎여나가는 데다[15] 이 센서는 현장에서 쉽게 교환할수도 없다. 이에 비해, 기계식 키보드는 적당한 환경에 방치해둔 80년대 제품이 2010년대에도 멀쩡히 작동하는 사례가
						많다. 또한 과거에 비해, 기계식 스위치의 수명이 많이 개선된 부분도 있다.</p>
					<ul class="actions">
						<li><a href="#" class="button primary">Top</a></li>
					</ul>

					<hr class="major" />

					<a id="partOfKeyboard"></a>
					<b>
						<h2>기계식 키보드의 구성요소</h2>
					</b>
					<span class="image main"><img src="" /></span>
					<b>
						<p>스위치</p>
					</b>
					<b>
						<p>보강판</p>
					</b>
					<b>
						<p>기판</p>
					</b>
					<b>
						<p>키캡</p>
					</b>
					<b>
						<p>케이스(=하우징)</p>
					</b>
					<ul class="actions">
						<li><a href="#" class="button primary">Top</a></li>
					</ul>
				</section>
`;








//------------------------------------------------------------------------------------------------------
//#페이지 [기계식 스위치의 분류] whatisSwitch
function PageStart_whatisSwitch_html() {
    document.getElementById('Page_index_html').innerHTML = Page_whatisSwitch_html_code;
}
var Page_whatisSwitch_html_code =
    `
<section>
<header class="main">
    <h1>Switch. 키 입력 신호를 받는 부품</h1>
    <h4>목차</h4>
    <ol>
        <li><a href="#Clicker">Clicker Switch.</a></li>
        <li><a href="#Tactail">Non-Click Switch & Tactail Switch.</a></li>
        <li><a href="#Linear">Linear.</a></li>
        <li><a href="#mechanism">mechanism.</a></li>
    </ol>
</header>
<span class="image main"><img src="images/whatisSwitch/switch_main.png"
        alt="images/noimagelong.jpg" /></span>
<div class="box">
    <p>기계식 키보드의 스위치는 키 입력 신호를 직접 받는 부품이다. 보통 키캡과 연결되는 플라스틱 구조물(스템 또는 슬라이더), 금속 접점과 반발력을 줄 수 있는 부품,
        내부를 보호해줄 플라스틱 덮개(하우징)로 이루어진다. 스프링의 종류나 강도, 구조물의 모양 등을 다르게 만들면 스위치의 느낌이 달라진다. 스위치의 외형으로는 각각의
        스위치를 구별하기 어려운 경우가 많아, 플라스틱 구조물에 색상을 입히고 해당 색의 이름으로 명명하는 경우가 많다. 스위치의 명칭은 제조사에서 붙이는 경우도 있지만
        사용자들이 자의적으로 붙이는 경우도 많다.</p>
</div>
<hr class="major" />
<a id="Clicker"></a>
<h2>Clicker Switch, ex.청축</h2>
<span class="image main"><img src="images/whatisSwitch/switch_click.jpg"
        style="max-width: 70%; max-height: 50%"></span>
<p>클릭(Click) 스위치는 키가 입력되었다는 것을 청각적 피드백, 즉 '클릭' 소리로 알려주는 특성을 가진 스위치를 말한다. 여기서 클릭이란 클릭 스위치의 청각적 피드백을
    가리키는 관용적인 단어다. 클릭 스위치는 소리를 내기 위한 부품이 작동하면서 촉각적 피드백 즉, 구분감이 발생하는 경우가 많아, 대부분의 클릭 스위치는 '클릭' 소리와
    구분감을 동시에 가진다. 주의할 점은 여기서 '클릭' 소리란 슬라이더가 하부 하우징에 닿으면서 발생하는 '딱(Clack)' 소리가 아닌 스위치 내부의 부품에 의해 발생하는
    소리를 가리킨다는 점이다. 따라서 클릭 스위치는 아주 천천히 누르거나, 슬라이더가 하부 하우징에 닿지 않아도 '클릭' 소리가 발생한다. 의외로 조용한 청축이 가끔가다가
    출시되는 경우가 있는데, 이런 경우는 기판과 하우징 사이에 흠읍재로 인한 소음감소 뿐만이 아니라 기판과 보강판에도 흠읍재가 장착된 모델의 경우, 청축이 시끄럽지 않고 조용한
    경우가 간혹 있다. 대부분 이렇게 "조용한 청축"의 경우는 가격도 비싸다.</p>
<ul class="actions">
<a href="#" class="button primary">Top</a>
</ul>
<hr class="major" />
<a id="Tactail"></a>
<h2>Non-Click Switch & Tactail Switch, ex.갈축</h2>
<span class="image main"><img src="images/whatisSwitch/switch_tactile.jpg"
        style="max-width: 70%; max-height: 50%"></span>
<p>넌클릭(Non-Click) 스위치는 구분감이 있는 스위치를 말한다. '넌클릭'이라는 용어의 유래는 클릭 스위치에서 '클릭' 소리를 뺀 것과 같다는 것에서 유래했다. 단, 클릭
    스위치 중에 구분감 없이 '클릭' 소리만 나는 경우도 있어 올바른 용어는 아니다. 이 때문에 해외에서는 보통 촉각적 피드백이 있다는 뜻의 텍타일(Tactile)이라는 용어를
    더 사용한다. 넌클릭 스위치는 '클릭' 소리를 내는 부품이 없기 때문에 스위치를 아주 천천히 누르거나, 슬라이더가 하부 하우징에 닿지 않으면, 아무런 소리가 나지 않는다.
</p>
<ul class="actions">
<a href="#" class="button primary">Top</a>
</ul>
<hr class="major" />
<a id="Linear"></a>
<h2>Linear, ex.적축</h2>
<span class="image main"><img src="images/whatisSwitch/switch_linear.jpg"
        style="max-width: 70%; max-height: 50%"></span>
<p>리니어(Linear) 스위치는 키압이 선형적(Linear)으로 증가하는 스위치를 말한다. 어떠한 '클릭' 소리나 구분감이 없다. 다시말해 타건감이 심심하다. 하지만 그와 바꾼
    장점은 움직이는 파트가 아예 없다시피 해서 내구성이 좋다. 80년대에 생산된 빈티지 스위치도 아직까지 사용할 수 있을 정도. 반면, 클릭이나 넌클릭의 경우 구조적으로
    접점부에 문제가 생기는 경우가 많고 내구성과 별개로 걸림이나 소리가 달라지기 때문에 리니어처럼 오래 사용하지는 못한다.</p>
<ul class="actions">
<a href="#" class="button primary">Top</a>
</ul>
<hr class="major" />
<h2>Mechanism. 타건 시 스위치 내부 모습</h2>
<a id="mechanism"></a>
<span class="image main"><img src="images/whatisSwitch/switch_autoiamge.gif" /></span>
<ul class="actions">
<a href="#" class="button primary">Top</a>
</ul>
</section>
`;









//------------------------------------------------------------------------------------------------------
//#페이지 [기계식스위치의 종류] everySwitch
function PageStart_everySwitch_html() {
    document.getElementById('Page_index_html').innerHTML = Page_everySwitch_html_code;
}
var Page_everySwitch_html_code =
    `
<section>
<header class="main">
    <h1>Switch Brand. 다양한 제조회사들의 작품</h1>
    대표적으로 많이쓰이는 상급 - 중급의 스위치를 간략히 소개합니다.
    <h4>목차</h4>
    <ol>
        <li><a href="#cherrySwtich">cherry Swtich.</a></li>
        <li><a href="#GateronSwitch">Gateron Switch.</a></li>
        <li><a href="#kailhSwtich">kailh Swtich.</a></li>
    </ol>
</header>
<hr class="major" />
<h2 id="cherrySwtich">cherry Swtich</h2>
<span class="image main"><img src="images/SwitchBrand/cherrySwtich.PNG"/></span><p></p>
<a href="#" class="button">Top</a>
<hr class="major" />
<h2 id="GateronSwitch">Gateron Switch</h2>
<span class="image main"><img src="images/SwitchBrand/GateronSwitch.PNG"/></span><p></p>
<a href="#" class="button">Top</a>
<hr class="major" />
<h2 id="kailhSwtich">kailh Swtich</h2>
<span class="image main"><img src="images/SwitchBrand/kailhSwtich.jpg"/></span><p></p>
<a href="#" class="button">Top</a>
</section>
`;








//------------------------------------------------------------------------------------------------------
//#페이지 [키보드의 연결방식] whatisConnect
function PageStart_whatisConnect_html() {
    document.getElementById('Page_index_html').innerHTML = Page_whatisConnect_html_code;
}
var Page_whatisConnect_html_code =
    `
<section>
				키보드 유선연결	
					<header class="main">
						<h1>How to Connet? 다양한 연결 방법</h1>
					</header>
					<h4>목차</h4>
					<ol>
						<li><a href="#ConnectWire">유선 연결.</a></li>
						<li><a href="#Connectwireless">무선 연결.</a></li>
						<li><a href="#ConnectBuletooth">블루투스 연결.</a></li>
						<li><a href="#ConnectBuletoothDongle">동글로 블루투스 연결.</a></li>
					</ol>

					<span class="image main"><img src="" /></span>
					<!-- 키보드 입력에 대한 이미지.... (너무추상적인데) -->
					<p>키보드 연결은 크게 3가지로 선으로 하는 연결인 <b>유선연결</b>과 신호송수신기인 Dongle을 통한 <b>무선연결</b>과 장치 내부에 적재된 무선통신장비를 이용하여
						연결되는 <b>블루투스 연결</b>이 있습니다.</p>

					<hr class="major" />

					<a id="ConnectWire"></a>
					<h2>1. 유선 연결</h2>
					<span class="image fit"><img src="images/whatisConnect/wire.jpg"
							style="max-width: 50%; max-height: 30%"></span>
					<p>유선 연결은 선을 통하여 장치와 키보드를 연결하는 방식입니다.</p>
					<p>유선 연결은 보안측면에서 우수하고 전송안정성이 높으며 구현이 쉽기 때문에 상당히 대중적인 방식입니다. 하지만 선의 존재로 사용에 불편함이 있기도 합니다.</p>
					<ul class="actions">
						<li><a href="#" class="button primary">Top</a></li>
					</ul>

					<hr class="major" />

					<a id="Connectwireless"></a>
					<h2>2. 무선 연결</h2>
					<span class="image fit"><img src="images/whatisConnect/wireless.jpg"
							style="max-width: 50%; max-height: 30%"></span>
					<p>무선 연결은 송수신기인<b>동글(Dongle)</b>을 통해 장치와 키보드를 연결하는 방식입니다.</p>
					<p>동글을 통한 무선 연결은 즉각적이며 소프트웨어, 칩셋의 탑재여부와 별개로 작동하기 때문에 편리하고 wifi나 bluetooth등의 전파간섭에 상대적으로 강해서 편리하긴 하지만
						보안측면에서 가장 취약한 방법입니다. 또한 동글은 크기가 작은 송수신기이기에 분실의 여지도 큽니다.</p>
					<ul class="actions">
						<li><a href="#" class="button primary">Top</a></li>
					</ul>

					<hr class="major" />

					<a id="ConnectBuletooth"></a>
					<h2>3. 블루투스 연결</h2>
					<span class="image fit"><img src="images/whatisConnect/bluetooth.jpg"
							style="max-width: 50%; max-height: 30%"></span>
					<p>블루투스 연결은 연결할 장치 내부에 Bluetooth기능을 지원하고 키보드에서도 Bluetooth기능이 지원 될 때 장치와 키보드간 Bluetooth로 연결하는 방법입니다.
					</p>
					<p>블루투스에는 버전이 존재하며 버전에 따라 지원하는 기능이나 전력 효율, 연결 효율에서 차이가 발생할 수 있습니다.</p>
					<h4>Bluetooth version.</h4>
					<h6>(2022년 04월 17일 기준)</h6>
					<div class="table-wrapper">
						<table>
							<thead>
								<tr>
									<th>버전</th>
									<th>전송속도</th>
									<th>설명 & 기능</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1.X</td>
									<td>721Kbps</td>
									<td>1.1 부터 1.2 까지 개선됨</td>
								</tr>
								<tr>
									<td>2.X</td>
									<td>2.1Mbps~3Mbps</td>
									<td>+EnhancedDataRate(사용 시 3Mbps), +SecureSimplePairing, "블루투스 사용 권장 하한선"</td>
								</tr>
								<tr>
									<td>3.0</td>
									<td>2.1Mbps~24Mbps</td>
									<td>HighSpeed사용 시 24Mbps, 보급형에 주로 사용됨. </td>
								</tr>
								<tr>
									<td>4.0</td>
									<td>1Mbps~24Mbps</td>
									<td>클래식 블루투스, 고속 블루투스(24Mbps), 저전력 블루투스(1mbps) 프로토콜 지원</td>
								</tr>
								<tr>
									<td>4.1</td>
									<td>1Mbps~24Mbps</td>
									<td>LTE와 블루투스 간섭감소, 자동 재 연결, </td>
								</tr>
								<tr>
									<td>4.2</td>
									<td>4.1의 2배</td>
									<td>저전력 보안접속, LinkLayerPrivacy, 블루투스로 인터넷 접속, 보안 개선</td>
								</tr>
								<tr>
									<td>5.0</td>
									<td>거리별로 다름</td>
									<td>최대속도와 거리 조절기능, 패킷량 증대, 비콘 서비스기능 추가, no페어링 통신</td>
								</tr>
								<tr>
									<td>5.1</td>
									<td>거리별로 다름</td>
									<td>방향감지기능 추가</td>
								</tr>
								<tr>
									<td>5.2</td>
									<td>거리별로 다름</td>
									<td>오디오 코덱 표준 지원 증대</td>
								</tr>
								<tr>
									<td>5.3</td>
									<td>거리별로 다름</td>
									<td>전력소모량 감소, 암호화키 조절, 채널분류로 통신 신뢰도 개선</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td colspan="2"></td>
									<td>* 5.0 이상부터는 class 설정에 따라 최대거리, 최대전송속도가 달라짐.</td>
								</tr>
							</tfoot>
						</table>
					</div>
					<ul class="actions">
						<li><a href="#" class="button primary">Top</a></li>
					</ul>

					<hr class="major" />

					<a id="ConnectBuletoothDongle"></a>
					<h2>4. 동글로 블루투스 연결.</h2>
					<span class="image fit"><img src="images/whatisConnect/bluetoothDongle.PNG"
							style="max-width: 50%; max-height: 30%"></span>
					<p>연결할 장치에는 충분하고 적합한 Port가 있지만 Bluetooth를 지원하지 않을 경우 이면서, 키보드는 Bluetooth기능을 가지고 있다면 블루투스 송수신기 역할을 해줄
						수 있는 Bluetooth 동글을 장치에 연결해서 동글과 키보드간 연결이 가능합니다.</p>
					<ul class="actions">
						<li><a href="#" class="button primary">Top</a></li>
					</ul>

				</section>
`;














//------------------------------------------------------------------------------------------------------
//#페이지 [스위치별 타건영상] videoSwitch
function PageStart_videoSwitch_html() {
    document.getElementById('Page_index_html').innerHTML = Page_videoSwitch_html_code;
}
var Page_videoSwitch_html_code =
    `
<!-- Content -->
<section>
    <header class="main">
        <h1>기계식키보드의 타건 영상 모아보기</h1>
    </header>
    <span class="image main"><img src="" /></span>
    <p>지금 페이지에서는 <b>기계식키보드 스위치 별로 타이핑</b>하는 영상들을 보실 수 있습니다.</p>
    <p>원하시는 제품을 바로 구매하지 마시고 사용시에 발생하는 모습, 소리를 듣고 구매하시면 더 현명한 소비를 하시는데 도움이 될 수 있습니다.</p>
    <hr class="major" />
    <h2>시청을 희망하는 기계식키보드의 종류 선택하기</h2>
    <p></p>
    <select id="select_SwitchVideo" onchange="ShowFunction_SwitchVideo()">
        <option value="0">- 보고싶은 주제를 선택하세요. -</option>
        <option value="Video_BlueSwitch" >클릭커: 체리 스위치 (청축)</option>
        <option value="Video_BrownSwitch" >넌클릭: 체리 스위치 (갈축)</option>
        <option value="Video_RedSwitch" >리니어: 체리 스위치 (적축)</option>
        <option value="Video_SilentSwitch" >저소음: 체리 스위치 (저소음축)</option>
    </select>
    <p></p>
    <hr class="major" />
    <div id="Show_SwitchVideo"></div> <!--영상 나오는 위치 Div-->
    <hr class="major" />
</section>
`;


function ShowFunction_SwitchVideo() {
    var choice_SwitchVideo = document.getElementById("select_SwitchVideo").value;
    if (choice_SwitchVideo == "Video_BlueSwitch") {
        document.getElementById('Show_SwitchVideo').innerHTML =
            `
        <b>클릭커 스위치, Blue Switch 테스트 영상</b>
        <video controls width="90%">
            <source src="video/videoSwitch/blueSwitchshort.mp4">
        </video>
        <p><a href="#" class="button primary">Top</a>
        `;
    }
    else if (choice_SwitchVideo == "Video_BrownSwitch") {
        document.getElementById('Show_SwitchVideo').innerHTML =
            `
        <b>넌클릭 스위치, Brown Switch 테스트 영상</b>
        <video controls width="90%">
            <source src="video/videoSwitch/BrownSwitchShot.mp4">
        </video>
        <p><a href="#" class="button primary">Top</a>
        `;
    }
    else if (choice_SwitchVideo == "Video_RedSwitch") {
        document.getElementById('Show_SwitchVideo').innerHTML =
            `
        <b>리니어 스위치, Red Switch 테스트 영상</b>
        <video controls width="90%">
            <source src="video/videoSwitch/RedSwitchShot.mp4">
        </video>
        <p><a href="#" class="button primary">Top</a>
        `;
    }
    else if (choice_SwitchVideo == "Video_SilentSwitch") {
        document.getElementById('Show_SwitchVideo').innerHTML =
            `
        <b>저소음 스위치, Silent Switch 테스트 영상</b>
        <video controls width="90%">
            <source src="video/videoSwitch/SilentSwitchShot.mp4">
        </video>
        <p><a href="#" class="button primary">Top</a>
        `;
    }
    else {
        document.getElementById('Show_SwitchVideo').innerHTML = "보고싶은 항목을 선택하여 주세요.";
    }
}








//------------------------------------------------------------------------------------------------------
//#페이지 [브랜드별 타건영상] videoBrand
function PageStart_videoBrand_html() {
    document.getElementById('Page_index_html').innerHTML = Page_videoBrand_html_code;
}
var Page_videoBrand_html_code =
    `
<!-- Content -->
<section>
    <header class="main">
        <h1>브랜드 별 타건 영상 보기</h1>
    </header>
    <span class="image main"><img src="" /></span>
    <p>지금 페이지에서는 <b>브랜드 별로 타이핑</b>하는 영상들을 보실 수 있습니다.</p>
    <p>원하시는 제품을 바로 구매하지 마시고 사용시에 발생하는 모습, 소리를 듣고 구매하시면 더 현명한 소비를 하시는데 도움이 될 수 있습니다.</p>
    <h4>목차</h4>
    <ol>
        <li><a href="#ABKO_COXt">ABKO-COX: 오테뮤, GTMX스위치</a></li>
        <li><a href="#Archon">Archon: 체리스위치</a></li>
        <li><a href="#Keychron">Keychron: 게이트론스위치</a></li>
    </ol>
    <hr class="major" />
    <p id="ABKO_COX"><b>ABKO - COX</b>. COX의 다양한 스위치를 순서대로 타건합니다.</p>
    COX는 오테뮤스위치와 GTMX스위치를 사용합니다.</p>
    <video controls width="70%">
    <source src="video/videoBrand/COX_CK01TKL.mp4">
    </video>
    <p><a href="http://www.coxenc.co.kr/" class="button" target="_blank">ABKO</a>
    ABKO Store
    <p><a href="#" class="button primary">Top</a>
    <hr class="major" />
    <p id="Archon"><b>Archon</b>. 청축, 갈축, 적축 스위치를 타건합니다.</p>
    Archon은 체리스위치를 위주로 제작합니다.</p>
    <video controls width="70%">
    <source src="video/videoBrand/archon_ak60.mp4">
    </video>
    <p><a href="https://smartstore.naver.com/archon/" class="button" target="_blank">Archon</a>
    Archon Naver Store
    <p><a href="#" class="button primary">Top</a>
    <hr class="major" />
    <p id="Keychron"><b>Keychron</b>. 청축, 갈축, 적축 스위치를 타건합니다.</p>
    Keychron은 게이트론스위치를 사용합니다.</p>
    <video controls width="70%">
    <source src="video/videoBrand/Keychron_K2.mp4">
    </video>
    <p><a href="https://www.keychron.com/" class="button" target="_blank">Keychron</a>
    Keychron Store
    <p><a href="#" class="button primary">Top</a>
    <hr class="major" />
</section>
`;







//------------------------------------------------------------------------------------------------------
//#페이지 [키보드 구매방법 안내] buyDanawa
function PageStart_buyDanawa_html() {
    document.getElementById('Page_index_html').innerHTML = Page_buyDanawa_html_code;
}
var Page_buyDanawa_html_code =
    `
<section>
<header class="main">
    <h1>How to buy from Online ShoppingMall (Danawa)</h1>
</header>
<img src="images/howtobuy/DanawaLogoBig.png" width="30%" height="30%" />
<p>다나와는 한국 온라인쇼핑을 다수의 가격정보와 제품정보를 한번에 살펴볼수 있어 초보자의 구매에 도움이되는 사이트입니다.</p>
<h4>목차</h4>
<ol>
    <li><a href="#Danawa_MainPageShow">Danawa, 온라인 종합 쇼핑몰.</a></li>
    <li><a href="#Danawa_HowtouseFilter">검색필터 쓰는 방법.</a></li>
    <li><a href="#Danawa_Caution">구매시 주의사항.</a></li>
</ol>
<hr class="major" />
<h2 id="Danawa_MainPageShow">Danawa, 온라인 종합 쇼핑몰</h2>
<span class="image main"><img src="images/howtobuy/DanawaMain.PNG"
        style="max-width: 70%; max-height: 50%"></span>
<p>다나와(Danawa)는 에누리.com과 함께 파편화되어있는 온라인쇼핑몰들의 정보를 한곳에서 찾아 동시에 가격을 비교하여 보고 각종 데이터와 제품에 대한 정보를 한 눈 에 볼 수 있도록 정리한 사이트입니다.</p>
<p>자체적인 판매도 하지만 다양한 사이트의 정보를 한번에 보고 확인할 수 있다는 것이 큰 강점이며, 구매유경험자부터 초보자까지 편리하게 구매할 수 있습니다.</p>
<a href="#" class="button primary">Top</a>
<hr class="major" />
<h2 id="Danawa_HowtouseFilter">검색필터 쓰는 방법</h2>
<span class="image main"><img src="images/howtobuy/DanawaPage.PNG"
    style="max-width: 70%; max-height: 50%"></span>
<p>다나와 홈페이지에서 검색창에 바로 검색하지 않고 " 카테고리 > PC주요부품 > 키보드 > 기계식키보드 "로 간다면 상세검색을하여 필터링을 할 수 있습니다.</p>
<p>상세검색에서 체크한 항목은 포함된 채로 하단에 결과에 나오게 됩니다. 만약 필터링을 거칠 옵션이 무엇인지 궁금하다면 하단에 밑줄쳐진 단어, 옵션은 누를 경우 간략한 안내가 나옵니다.</p>
<a href="#" class="button primary">Top</a>
<hr class="major" />
<h2 id="Danawa_Caution">구매시 주의사항!</h2>
<span class="image main"><img src="images/howtobuy/DanawaAds.PNG"
        style="max-width: 70%; max-height: 50%"></span>
<p>구매시 주의사항으로는 필터를 거친 제품리스트의 상부에도 '애드리더'라고 하여 광고가 나올 수 있고 이 광고 안의 내용은 필터링 된 내용과는 다른 내용이기에 구매시 주의하여야 합니다.</p>
<a href="#" class="button primary">Top</a>
<hr class="major" />
</section>
`;
