import { DivTotal, Div, H1, P, DivEnd, Image, OuterStyles } from './styled'

export const FooterComponent = () => {
  return (
    <OuterStyles>
      <DivTotal>
        <Div>
          <H1>お問い合わせ</H1>
          <P>ニュース</P>
          <P>会社概</P>
          <P>要利用規約</P>
          <P>特定商取引に基づく表記</P>
          <P>個人情報保護方針</P>
        </Div>
        <Div>
          <H1>ANYTIMES安心への取り組み</H1>
          <P>報酬は仕事前に事務局に支払われ、評価・完了後に振り込まれます。</P>
          <P>
            トラブルを避けるために、直接契約や金銭の手渡し、連絡先の交換はご遠慮いただいています。
            必ずエニタイムズのチャット内でやりとりして下さい。
            どうしても連絡先の交換が必要な場合、事務局までご連絡ください。
          </P>
        </Div>
        <Div>
          <H1>決済方法</H1>
          <P>
            お支払いは、クレジットカードまたはPayPal決済がご利用いただけます。
            クレジットカードの場合は、 VISA, Master Card,
            JCBがご利用いただけます。 PayPalの場合は、 VISA, Master Card, AMEX,
            JCBがご利用いただけます。
            クレジットカードをお持ちでない方は事務局までご連絡ください。
          </P>
          <DivEnd>
            <Image src='https://s3-alpha-sig.figma.com/img/1472/175f/dd0a67cf96389208dd4e81337d566095?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CSGSPUnZgVpmekDSfWb~yJiImdk4oE~Obrtr1vU6EChXPK2vEzmivVsBbrx4S6qHqd1txAZ6IneypwxvadYHPR9REWpnvrfJYRmFWDOtAuicVhMbNRr3eB9WSUUqY7kyv4wMfhvLdS7iUh~t9RYoo56t1UC6-oZKf8B2jyqYMeD1dZ7dZZX1Bg1YCxxXX2Y~Pghqhl1MWncBWc6Qgo-Oz~ZM5EX8t~NAFr18Q1Z4HSyHvu~nbuxv2hCH6Dss2WmSuCv3LhtEdY~vgpWRrcn9Egu4ZFZ1seIRM~RofyJKSKY2749upRWOo2EZQtr4shG~lmBrojUwPDsNbMwdawdqRA__'></Image>
            <Image src='https://www.figma.com/file/K2F0T2x3ldEKqlUEgqfyMh/image/a8765ae12dfae7cc9386206dedea2f6b02b73ba1'></Image>
            <Image src='https://www.figma.com/file/K2F0T2x3ldEKqlUEgqfyMh/image/4287ba37d2f388aee74858f9293f7532622a06d1'></Image>
            <Image src='https://www.figma.com/file/K2F0T2x3ldEKqlUEgqfyMh/image/f2bf92d3784cd76d37cbcc3f31c6b8910b2e42da'></Image>
          </DivEnd>
        </Div>
      </DivTotal>
    </OuterStyles>
  )
}
