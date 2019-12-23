<template>
  <footer>
    <div class="container grid_container">
      <div class="item_group col-lg-16-nogutter col-md-24-nogutter clearfix">
        <div class="groups col-lg-12 col-sm-24">
          <h3>{{ title }}</h3>
          <div class="card_group">
            <Card
              :image="items[0].image"
              :link="items[0].link"
            >
              <p slot="des1">
                {{ items[0].des }}
              </p>
            </Card>
            <Card
              :image="items[1].image"
              :link="items[1].link"
            >
              <p slot="des1">
                {{ items[1].des }}
              </p>
            </Card>
            <Card
              :image="items[2].image"
              :link="items[2].link"
            >
              <p slot="des1">
                {{ items[2].des }}
              </p>
            </Card>
          </div>
        </div>
        <div class="groups col-lg-12 col-sm-24">
          <h3>{{ title }}</h3>
          <div class="card_group">
            <Card
              :image="items[3].image"
              :link="items[3].link"
            >
              <p slot="des1">
                {{ items[3].des }}
              </p>
            </Card>
            <Card
              :image="items[0].image"
              :link="items[0].link"
            >
              <p slot="des1">
                {{ items[0].des }}
              </p>
            </Card>
            <Card
              :image="items[1].image"
              :link="items[1].link"
            >
              <p slot="des1">
                {{ items[1].des }}
              </p>
            </Card>
          </div>
        </div>
      </div>
      <Card
        :image="items[0].image"
        :link="items[0].link"
        class="big_card col-lg-8 col-md-24"
      >
        <p
          slot="des1"
          class="big_content"
        >
          {{ items[0].des }}
        </p>
        <p
          slot="des2"
          class="big_content"
        >
          {{ items[0].des2 }}
        </p>
      </Card>
    </div>
  </footer>
</template>

<script>
import Card from '@/components/Cards.vue';

export default {
  name: 'Footer',
  components: {
    Card,
  },
  data() {
    return {
      title: '列表',
      items: [
        {
          name: 'Zelda',
          des: '傳說中，每當邪惡的古老惡魔——災厄加儂（Calamity Ganon）降臨海拉魯王國（Hyrule Kingdom）並帶來不幸時，兩位光之勇者——女神海利亞（Hylia）後代的光明公主和她的騎士，都能成功地擊敗邪惡並帶回和平。海拉魯王國內的人們決定用他們先進的科技製造出守護者（Guardians）和四隻巨大的機械神獸（Divine Beast）用以協助勇者。當災厄加儂再度降臨時，勇者和公主成功地將其再次封印。',
          des2: '一萬年過去了，海拉魯王國曾經的輝煌先進早已不復在。但在人們發掘王國內不同區域的時候卻挖出了應該是只存在傳說中、已經廢棄許久的神獸和守護者殘骸。薩爾達公主（Zelda）和騎士林克（Link）決定效仿古人的做法，用這些神獸和加儂對決。他們指派了四位英傑——鼓隆族的達爾克爾（Daruk）、卓拉族的米法（Mipha）、利特族的力巴爾（Revali）和格魯特族的烏爾波扎（Urbosa）去操控四隻神獸。但是他們沒有想到災厄加儂會從城堡正下方重新復活，災厄加儂的奇襲導致了慘劇－四位英傑被殺、城堡被毀、守護者也被邪惡力量控制反過來攻擊國民，海拉魯王國覆滅了。林克在保護薩爾達時受到重傷而被帶去治療，薩爾達則孤身一人使用自己的力量將加儂壓制在城堡中。',
          image: '1.jpg',
          link: 'https://reurl.cc/Qpl3Wo',
        },
        {
          name: 'Persona 5',
          des: '《女神異聞錄5》發生在一個有人格面具（Persona）的世界中，圍繞著一群利用人格面具的高中學生展開。人格面具是駕馭心靈而得到的力量。在心裡隱藏著的「另一個自己」，在觸到自己心底的時候出現的人格。或在面對外界事物時，表現在外的「人格」，將自己武裝起來的「面具」。',
          des2: '遊戲發生在20XX年四月的現代東京，秋葉原、新宿、澀谷等地區都與現實世界中的一樣。不僅有很大的遊戲場景，還有一些特殊地點諸如商店，餐館，和電影院可以進入。整個遊戲的主要遊戲場景是主角就讀的私立秀盡學園。第二個主要場景是「異世界」（Metaverse），這是一個超自然的地方，由人類的潛意識和認知的物質表現形式組成。在異世界中，心中有強烈扭曲欲望的人形成了自己獨特的「殿堂」，同時亦是殿堂主人的另一個現實世界，主人陰影是殿堂的支配者，若主人陰影被殺，殿堂主人就會失去所有欲望，包括生存的欲望，而變成「廢人」。殿堂里有各種各樣的陰影，是殿堂主人強烈扭曲的欲望實體化而成的存在。「秘寶」是欲望的來源，在殿堂的中心，只要把秘寶從殿堂中奪走的話，就會令殿堂消失，同時殿堂主人亦會改邪歸正。剛發現秘寶時是無法馬上奪走，因尚未實體化的緣故，需通過「預告信」將其實體化。天鵝絨房間是《女神異聞錄系列》慣例登場的謎之房間，在這間房間可以進行人格面具合體等操作。它是夢與現實、意識與無意識之間的世界。由於該房間的形態和背景是會根據契約者的命運和心境而有所變化的，所以本作的天鵝絨房間是於監獄之中。',
          image: '2.jpg',
          link: 'https://reurl.cc/Na86Gm',
        },
        {
          name: 'DQ11',
          des: '本作的舞台名為洛特澤塔西亞，在這個世界裡流傳著勇者的傳說。在傳說中勇者是世界的中心「生命大樹」所賜予的孩子，而只要勇者降臨，這個世界的和平就無可動搖。',
          des2: '主角的故鄉叫做石之村，在16歲的生日時，主角為完成成人禮與同樣在這一天成年的好友艾瑪一來到「神之岩」舉行儀式，在這裡寄宿著大地的精靈。完成儀式以後，主角得知自己是勇者的轉世，在主角的手背上有著象徵著勇者的印記。在他母親的留言中，他得知來到德魯卡達爾能知曉一切真相。但覲見國王、聲稱自己是傳說中的勇者轉生一事之後，國王將他作為「惡魔之子」進行追捕。',
          image: '3.jpg',
          link: 'https://reurl.cc/qDb8ZR',
        },
        {
          name: 'YS8',
          des: `結束沙之都的冒險後，亞特魯與多奇為賺取旅費也節省交通費用，登上前往艾雷西亞的定期客輪「倫巴底號」，打工的同時也尋找前往的阿爾塔戈公國的機會。

          然而客輪在行經蓋提海惡名昭彰的神祕無人島「賽連島」附近海域時遭到不明的巨大觸手襲擊沉沒，亞特魯、多奇與「倫巴底號」的船員乘客因此漂流到了神秘的賽連島上。`,
          des2: `要成功脫離無人島，漂流者們必須弄清楚巨大觸手的本體，卻意外發現沉睡在賽連島上的古文明「耶坦尼亞王國」的遺跡，而亞特魯也因為不明原因與古耶坦尼亞的宗教最高領袖「巨樹巫女」產生了意識連結。

          為了求生，亞特魯等人在神秘的賽連島上展開了一連串的冒險，調查古文明的消失之謎。`,
          image: '4.jpg',
          link: 'https://reurl.cc/VaZXRb',
        },
      ],
    };
  },
};

</script>

<style lang="scss">
footer{
  @extend %section_margin_top;
  padding: times(3) 0;
  background: map-get($color,main);
  .groups{
    .card{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: times(2);
      .pic{
        width: times(4,'%');
        padding-top: times(3,'%');
      }
      .des{
        width: times(6,'%');
        margin-left: times(1);
        @include elli(2);
        @extend %ellinone;
      }
    }
  }
  .big_card{
    .pic{
      margin-top: times(2);
    }
  }
  h3{
    color: map-get($color,footerfz);
  }
  p{
    color: map-get($color,footerfz);
  }
}

</style>
