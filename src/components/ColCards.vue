<template>
  <div class="colcards">
    <div class="container grid_container">
      <Card
        class="col-lg-6 col-6 col-md-12 col-sm-24"
        :image="items[0].image"
        :link="items[0].link"
      >
        <h3
          slot="title"
          class="title"
        >
          {{ items[0].name }}
        </h3>
        <p
          slot="des1"
          class="content"
        >
          {{ items[0].des }}
        </p>
      </Card>
      <Card
        class="col-lg-6 col-6 col-md-12 col-sm-24"
        :image="items[1].image"
        :link="items[1].link"
      >
        <h3
          slot="title"
          class="title"
        >
          {{ items[1].name }}
        </h3>
        <p
          slot="des1"
          class="content"
        >
          {{ items[1].des }}
        </p>
      </Card>
      <Card
        class="col-lg-6 col-6 col-md-12 col-sm-24"
        :image="items[2].image"
        :link="items[2].link"
      >
        <h3
          slot="title"
          class="title"
        >
          {{ items[2].name }}
        </h3>
        <p
          slot="des1"
          class="content"
        >
          {{ items[2].des }}
        </p>
      </Card>
      <Card
        class="col-lg-6 col-6 col-md-12 col-sm-24"
        :image="items[3].image"
        :link="items[3].link"
      >
        <h3
          slot="title"
          class="title"
        >
          {{ items[3].name }}
        </h3>
        <p
          slot="des1"
          class="content"
        >
          {{ items[3].des }}
        </p>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Cards.vue';

export default {
  name: 'ColCards',
  components: {
    Card,
  },
  data() {
    return {
      items: [
        {
          name: 'Zelda',
          des: '傳說中，每當邪惡的古老惡魔——災厄加儂（Calamity Ganon）降臨海拉魯王國（Hyrule Kingdom）並帶來不幸時，兩位光之勇者——女神海利亞（Hylia）後代的光明公主和她的騎士，都能成功地擊敗邪惡並帶回和平。海拉魯王國內的人們決定用他們先進的科技製造出守護者（Guardians）和四隻巨大的機械神獸（Divine Beast）用以協助勇者。當災厄加儂再度降臨時，勇者和公主成功地將其再次封印。',
          image: '1.jpg',
          link: 'https://reurl.cc/Qpl3Wo',
        },
        {
          name: 'Persona 5',
          des: '《女神異聞錄5》發生在一個有人格面具（Persona）的世界中，圍繞著一群利用人格面具的高中學生展開。人格面具是駕馭心靈而得到的力量。在心裡隱藏著的「另一個自己」，在觸到自己心底的時候出現的人格。或在面對外界事物時，表現在外的「人格」，將自己武裝起來的「面具」。',
          image: '2.jpg',
          link: 'https://reurl.cc/Na86Gm',
        },
        {
          name: 'DQ11',
          des: '本作的舞台名為洛特澤塔西亞，在這個世界裡流傳著勇者的傳說。在傳說中勇者是世界的中心「生命大樹」所賜予的孩子，而只要勇者降臨，這個世界的和平就無可動搖。主角的故鄉叫做石之村，在16歲的生日時，主角為完成成人禮與同樣在這一天成年的好友艾瑪一來到「神之岩」舉行儀式，在這裡寄宿著大地的精靈。完成儀式以後，主角得知自己是勇者的轉世，在主角的手背上有著象徵著勇者的印記。在他母親的留言中，他得知來到德魯卡達爾能知曉一切真相。但覲見國王、聲稱自己是傳說中的勇者轉生一事之後，國王將他作為「惡魔之子」進行追捕。',
          image: '3.jpg',
          link: 'https://reurl.cc/qDb8ZR',
        },
        {
          name: 'YS8',
          des: `結束沙之都的冒險後，亞特魯與多奇為賺取旅費也節省交通費用，登上前往艾雷西亞的定期客輪「倫巴底號」，打工的同時也尋找前往的阿爾塔戈公國的機會。

          然而客輪在行經蓋提海惡名昭彰的神祕無人島「賽連島」附近海域時遭到不明的巨大觸手襲擊沉沒，亞特魯、多奇與「倫巴底號」的船員乘客因此漂流到了神秘的賽連島上。

          要成功脫離無人島，漂流者們必須弄清楚巨大觸手的本體，卻意外發現沉睡在賽連島上的古文明「耶坦尼亞王國」的遺跡，而亞特魯也因為不明原因與古耶坦尼亞的宗教最高領袖「巨樹巫女」產生了意識連結。

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
@import '@/assets/css/style.scss';
.colcards{
    @extend %section_margin_top;
}
</style>
