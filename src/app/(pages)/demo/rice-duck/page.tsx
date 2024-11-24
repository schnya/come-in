"use client";

import { MediaItem } from "@/components/organisms/MediaItem";
import { motion } from "framer-motion";
import { useState } from "react";
import { LiaLanguageSolid } from "react-icons/lia";

const video1 = (
  <MediaItem
    alt="duck"
    mediaItemId="AA2w_P8oJ7auJQ9_oiTQ3felBFKFd-kC57j_rUoIMYYb9cqhDbGum9i8votGNHIxLJ7JG1r_bC_jRHvkXB-hLLJFrX03qCk2Xg"
    className="shadow-inner"
    layout="fill"
    objectFit="cover"
  />
);
const video2 = (
  <MediaItem
    alt="duck"
    mediaItemId="AA2w_P8Jru8DpY-auQYU6W_rO4sFcve99QjpLAax1Xqal_zLhzBRYwJmm1PU3UrMA5KpNQeTRF-0p1feVafsDHW9COMoSDeKDQ"
    className="shadow-inner"
    layout="fill"
    objectFit="cover"
  />
);

const jp = [
  `広がる緑の田んぼ。

放たれる小さな鴨たちが織りなす物語。

合鴨農法は稲作と鴨の飼育を組み合わせた、持続可能な未来を描く挑戦です。

この物語の始まりは古く、東南アジアや中国、日本の一部地域で行われていた伝統的な方法を基に、1990年代に福岡県の有機農家・古野隆雄氏が提唱し、広まりました。

農薬や化学肥料に頼らず、安全で美味しい米と鴨肉を育むこの農法は、いまや持続可能な農業の希望の光として注目されています。`,
  {
    h: "自然が奏でる協奏曲 - 米と鴨の共演",
    content: [
      {
        h: "農法の基本原理",
        content: (
          <>
            <p>
              田植えから7～10日後、ネットや電気柵で囲まれた水田に鴨の雛が放たれます。田んぼに泳ぎ回る小さな雛たちが、雑草を食べ、害虫を駆除し、水を濁らせて稲を刺激します。鴨は稲の生長を促しながら、土壌の健康を守る重要なパートナーです。
            </p>
            {video1}
          </>
        ),
      },
      {
        h: "自然除草と害虫駆除のしくみ",
        content: (
          <p>
            小さな脚で田んぼを歩き回る鴨たちは、雑草の芽を浮き上がらせたり、害虫を食べたりします。彼らの旺盛な食欲は、ウンカ(浮塵子)などの害虫を一掃し、農薬に頼る必要をなくします。その光景は、田んぼというステージで繰り広げられる自然の調和のダンスのようです。
          </p>
        ),
      },
    ],
  },
  {
    h: "大地を豊かにする鴨の役割",
    content: [
      {
        h: "有機肥料としての働き",
        content: (
          <p>
            鴨が田んぼで食べたものは、そのまま土壌に栄養分として還元されます。この自然由来の肥料は、稲の生長を支えるだけでなく、土壌そのものを健康で豊かな状態に保つ役割を果たします。化学肥料では得られない、自然の力がもたらす恩恵です。
          </p>
        ),
      },
      {
        h: "稲への刺激と土壌の活性化",
        content: (
          <p>
            鴨が田んぼの水を濁らせることで、稲の根に適度な刺激が加わり、根の成長が促進されます。同時に、土壌の養分が全体に行き渡り、豊かな土地を作り出します。
          </p>
        ),
      },
    ],
  },
  {
    h: "持続可能な豊かさ - 収穫の先にあるもの",
    content: [
      {
        h: "米と鴨肉がもたらす経済的価値",
        content: (
          <>
            {video2}
            <p>
              鴨たちが支えた米は、有機米として市場で高値で取引されます。特に、赤ちゃん向けの有機米の需要は高く、安定した販売経路が期待されています。一方で、収穫後の鴨たちは1～2カ月間肥育され、鴨肉として市場に供給されます。
            </p>
          </>
        ),
      },
      {
        h: "付加価値製品としての鴨肉と卵",
        content: (
          <p>
            鴨肉は栄養価が高く、特別な加工品として販売することでさらなる付加価値を生み出します。また、卵も地元市場での販売や加工品としての利用が期待されています。
          </p>
        ),
      },
    ],
  },
  {
    h: "物語の陰に潜む挑戦 - 課題と未来への展望",
    content: [
      {
        h: "外敵から守る知恵",
        content: (
          <p>
            鴨の雛は、カラスやイタチといった外敵に狙われやすい存在です。これを防ぐために、ネットや電気柵、上空を守る天蚕糸が使われています。これらの工夫が、雛たちを守る盾となっています。
          </p>
        ),
      },
      {
        h: "鴨肉の販売経路と付加価値の向上",
        content: (
          <p>
            鴨肉の販売経路にはまだ課題が残ります。鴨肉市場に比べて供給量が少ないため、生産者自らが処理場を設けて販売経路を開拓する動きもあります。また、飼育時の餌や加工品開発により、鴨肉の価値をさらに高める取り組みが進んでいます。
          </p>
        ),
      },
    ],
  },
  {
    h: "結びに",
    content: (
      <p>
        合鴨農法は、稲と鴨が共に奏でる持続可能な農業の未来を描く一つの物語です。この方法がもたらす恩恵は、環境保護だけでなく、農家の経済的な安定や健康な食卓にもつながります。次世代の農業がどのように進化するか、その未来に思いを馳せてみてはいかがでしょうか？
      </p>
    ),
  },
];

const en = [
  `Vast green rice paddies stretch out, where small ducks are released, weaving their story.

This is the essence of the rice-duck farming method. This approach combines rice cultivation with duck rearing, painting a vision of a sustainable future.

Its origins are rooted in traditional practices from Southeast Asia, China, and some regions of Japan.

In the 1990s, Takao Furuno, an organic farmer from Fukuoka, Japan, proposed the modernized version, spreading its practice across the country.

By growing safe and delicious rice and duck meat without relying on pesticides or chemical fertilizers, this method has become a beacon of hope for sustainable agriculture.`,
  {
    h: "The Harmony of Nature: Collaboration Between Rice and Ducks",
    content: [
      {
        h: "The Fundamental Principles of the Method",
        content: (
          <>
            <p>
              Seven to ten days after rice planting, ducklings are released into
              paddies enclosed by nets or electric fences. These young ducks
              swim around, eating weeds, devouring pests, and muddying the
              water, stimulating the rice plants. Ducks are essential partners,
              promoting rice growth while maintaining soil health.
            </p>
            {video1}
          </>
        ),
      },
      {
        h: "Natural Weed Control and Pest Management",
        content: (
          <p>
            Ducks tread through the paddies, uprooting weed sprouts with their
            feet and eating pests. Their voracious appetite clears harmful pests
            like planthoppers, eliminating the need for chemical pesticides.
            It’s like a natural harmony dance unfolding on the stage of the
            paddies.
          </p>
        ),
      },
    ],
  },
  {
    h: "The Role of Ducks in Enriching the Land",
    content: [
      {
        h: "Ducks as Organic Fertilizer Providers",
        content: (
          <p>
            Duck droppings serve as natural fertilizer for the soil, enhancing
            its richness in ways chemical fertilizers cannot. This natural cycle
            improves the flavor and quality of the rice.
          </p>
        ),
      },
      {
        h: "Stimulating Rice and Activating Soil",
        content: (
          <p>
            By muddying the water, ducks provide subtle stimulation to the rice
            roots, promoting their growth. Simultaneously, nutrients are evenly
            distributed throughout the soil, creating fertile land.
          </p>
        ),
      },
    ],
  },
  {
    h: "Sustainable Abundance: Beyond the Harvest",
    content: [
      {
        h: "The Economic Value of Rice and Duck Meat",
        content: (
          <>
            {video2}
            <p>
              Rice supported by ducks is traded at premium prices as organic
              rice, with particularly high demand for baby food. After the
              harvest, ducks are fattened for 1–2 months and sold as duck meat
              in the market.
            </p>
          </>
        ),
      },
      {
        h: "Value-Added Products: Duck Meat and Eggs",
        content: (
          <p>
            Duck meat is highly nutritious and can be transformed into specialty
            products, creating additional value. Additionally, duck eggs are
            anticipated to perform well in local markets and processed goods.
          </p>
        ),
      },
    ],
  },
  {
    h: "Challenges Behind the Scenes: Issues and Future Prospects",
    content: [
      {
        h: "Protecting Ducks from Predators",
        content: (
          <p>
            Ducklings are vulnerable to predators like crows and weasels. To
            protect them, farmers use nets, electric fences, and overhead wires.
            These measures act as a shield, safeguarding the ducklings.
          </p>
        ),
      },
      {
        h: "Expanding Duck Meat Distribution and Value",
        content: (
          <p>
            Challenges remain in establishing a stable market for duck meat.
            With smaller yields compared to conventional ducks, some producers
            have begun running their own processing facilities. Developing feeds
            and processed goods further enhances the value of duck meat.
          </p>
        ),
      },
    ],
  },
  {
    h: "In Conclusion",
    content: (
      <p>
        Rice-duck farming is a narrative of sustainability, where rice and ducks
        work in harmony to envision a brighter agricultural future. The benefits
        extend beyond environmental protection to economic stability for farmers
        and healthier meals for families. Let us ponder the evolution of
        agriculture and the possibilities it holds for the next generation.
      </p>
    ),
  },
];

export default function RiceDuck() {
  const [contents, setContents] = useState(en);
  const [fontFamily, setFontFamily] = useState("Noto Sans JP");

  const switchLanguage = () => {
    if (contents === jp) {
      setContents(en);
    } else {
      setContents(jp);
      setFontFamily("Shippori Mincho B1");
    }
  };

  return (
    <main className="flex flex-col items-end py-[13px]">
      <button
        className="z-20 fixed m-[13px]"
        onClick={switchLanguage}
        children={<LiaLanguageSolid />}
      />
      <motion.div
        className="flex flex-col gap-9"
        initial={{ scale: 0.2, opacity: 0.2 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0.5 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <div className="relative">
          <div className="px-4 py-12">
            <div className="p-4 bg-slate-800/50 rounded-xl">
              <p
                className="font-medium drop-shadow-[0_0_4px_black] tracking-wider leading-relaxed whitespace-pre-wrap"
                style={{ fontFamily }}
              >
                {contents[0].toString()}
              </p>
            </div>
          </div>
          <MediaItem
            alt="duck"
            mediaItemId="AA2w_P9LPWUHaJVAEAyoDWpiBgShSALZ7SHedb_C94gB2julBU_WuZeiE9GzRlSws26QPVH2UHDRDEnXBsvfRSUsEqS09unVaA"
            className="-z-10 absolute shadow-inner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-9 px-[13px]">
          {contents.slice(1).map((content) => {
            if (typeof content === "object")
              return (
                <div className="flex flex-col gap-7">
                  <h2 className="text-4xl">{content.h}</h2>
                  {Array.isArray(content.content) ? (
                    <>
                      {content.content.map((c) => (
                        <div className="flex flex-col gap-5">
                          <h3 className="text-3xl">{c.h}</h3>
                          {c.content}
                        </div>
                      ))}
                    </>
                  ) : (
                    content.content
                  )}
                </div>
              );
          })}
        </div>
      </motion.div>
    </main>
  );
}
