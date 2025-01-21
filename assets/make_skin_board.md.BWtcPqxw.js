import{_ as s,c as i,o as a,a8 as n}from"./chunks/framework.UwPfSqyn.js";const E=JSON.parse('{"title":"게시판 스킨","description":"그누보드의 게시판 스킨을 만들기 위해 알아야 할 게시판 스킨의 구조와 스킨에서 사용할 수 있는 변수를 확인하고 사용해야 한다.","frontmatter":{"head":[["link",{"name":"canonical","content":"https://g5guide.github.io/make/skin/board.html"}]],"description":"그누보드의 게시판 스킨을 만들기 위해 알아야 할 게시판 스킨의 구조와 스킨에서 사용할 수 있는 변수를 확인하고 사용해야 한다."},"headers":[],"relativePath":"make/skin/board.md","filePath":"make/skin/board.md","lastUpdated":1737435351000}'),p={name:"make/skin/board.md"},l=n(`<h1 id="게시판-스킨" tabindex="-1">게시판 스킨 <a class="header-anchor" href="#게시판-스킨" aria-label="Permalink to &quot;게시판 스킨&quot;">​</a></h1><p>게시판 스킨은 게시판의 목록, 글 내용 보기, 댓글 및 댓글 쓰기, 글 쓰기 폼의 스킨으로 구성되어 있다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">skin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> board</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> basic</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &#39;basic&#39;이라는 이름을 가진 스킨 폴더</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list.skin.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 글 목록</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> view.skin.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 글 내용 보기</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> view_comment.skin.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 댓글 및 댓글 쓰기 폼</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write.skin.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 글 쓰기</span></span></code></pre></div><details class="details custom-block"><summary>스킨을 구성하는 전체 파일</summary><p>위 목록은 스킨을 구성하는 주요 파일이며, 아래는 화면의 구성과 특정 기능이 동작할 때 추가로 동작할 코드를 삽입할 수 있는 전체 파일의 목록이다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">skin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> board</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> basic</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete_all.head.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete_all.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete_all.tail.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete_comment.head.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete_comment.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete_comment.tail.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete.head.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete.tail.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> download.head.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> download.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> download.tail.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> good.head.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> good.tail.skin.php</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> view_comment.head.skin.php</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> view_comment.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> view_comment.tail.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> view.head.skin.php</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> view.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> view.tail.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write_comment_update.head.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write_comment_update.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write_comment_update.tail.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write_update.head.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write_update.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write_update.tail.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write.head.skin.php</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write.skin.php</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write.tail.skin.php</span></span></code></pre></div></details><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$list;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$board;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$total_count;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$admin_href;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$rss_href;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$write_href;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$is_checkbox;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$is_good;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$is_nogood;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$width;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$is_category;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$category_option;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$sfl;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$stx;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$spt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$sca;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$sst;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$sod;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$page;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$is_admin;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$is_auth;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$qstr2;</span></span></code></pre></div>`,5),h=[l];function k(t,e,d,F,r,c){return a(),i("div",null,h)}const y=s(p,[["render",k]]);export{E as __pageData,y as default};
