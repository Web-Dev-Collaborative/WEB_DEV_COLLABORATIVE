import React from 'react'
import PropTypes from 'prop-types'

const Survey = props => {
  return (
    <div className="survey-div">
      <div className="sub-header">
        <h2>How did you do?</h2>
      </div>

      <div className="grid grid-3">
        <button className="button grid easy"
          onClick={e => {
            e.stopPropagation()
            props.moveCardToBucket(props.front, 'easyBucket') 
          }}>
          <img alt="Easy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAT2SURBVGhD7ZppyBVVGMff1DSjMjPLbPmgSVFUVET0oc0iqCgKbTGoTMSgnRaKwKBo0YoIrSiK6oMotoBRkhJm0UIQREQQCm20kUW222Ll7zf0wGXu3Jkz73vn3lfxD78PZ5Yz58455zn/88wd2K5tWJPhYngY1sBn8AP8B3/Ad/AhPAe3w8mwEwwL7Q5Xwbtgg+vyGyyBU2EH6Ln2hHvgJ4hG+cafgSvhJLCHWt/4ODgYzoE74U3YDHH/+zADevKDfMgcsNE+/F9YAWfBjlBX/tjr4ROIH+Sw9Ac3pgnwEsQDX4DDoBsaBZfCV2Ddm2AedF2+ISevD/kG7IEmtAssBnvaZz0OI6ErOhq+Byu22ydB03IebYTo+dEwJB0CG8AKl8GQK6yhw+FriGcPumeMTF+AFRkiR0CvdSDEi7zfA3VldFoJVrAWetkTeR0Lv4PzpvbcvBz8EU7svT3QZ0V77J3xHkiRQyomd1PRaTCK0P9IVkrQveANRovhpCng+vI3OHdKtQf8Ao7Hbi123dQi8CU/kZVKdB0Mx94I7Q/2iD2jd+uo96Du3LAXh2LHJ0Idn/Yi2Ma5WalAB4AXONFTKt4PXgPv8S05CfVMqXLofgDe737lNkjRLPAel4dCzQYvWJ6VqvUKeH0rN0GKXKXXQ/7+86FKmtd/4GcofHGPgZW5n6iS5s7K8g15A1J0KOTvFR1EiqInj8xKOb0OnjwxK5XLN+rurrUR4vhNkfuQ/L2i803RUvB6h1mbvgRP7puVqrUAWhthyD4FUuUQbr1fG6JJTdEd4D3zs1JOjjlPjs1K1dJEXgHOlefB7W0d6d9uhVfBN3wEpOoasK2FRtITjvutQZeB7S20K4ZQT24NChNp6qlNsSMrXTGHiW4E22omp00fgSdTJ1w/9SDY1muzUk76K0+enZWKpddxQWpaB0GZ7YlN3xlZKae7wJMmz4pkNHPt+Bz28kBDugQM5Q9lpXa5e43tr7aqTaeBJ9/KSsUyi+I1pkibmEunw5/gMwoXO6RH8/zHWalAO4OLkmnMfTxQIJ3qOogf083U0EzQPFp34ST+Xy6CXvNoVuog0y5eZFToJF1vGD6HmcmBoUjjp/ONpNwD0EkOq3h2qZWya73IXGyZJXdfbxLaa11/7gaNZF25mr8D1uNifAOUycnttZ9CabLbk+EstfVlGgP6rciom9i+GToNy5DW5jgwcx+9YDp2OlTJ+ev1WqNKnQderInc1QMVcmiFcxbf7Nvgj7wazgU/AN0C5nIjUS3OyftgN6jSReA9Jg2T/KC9Eju/VFutdL6ax18hGtoJI85CSA0WDuVIn17ogVS58XGDb9eXLZBFciE7E5zAT4NDSHwp9pB115EvNhbA1R6oqzBmP0I/U0OGYtthjww66/kUWInjUtvQa/k1y+c7l1J2rh3lljY8mLbgGOiFHE6xAzUq1h3ehTLMPgtW2tgnsRa1fuLzeUa9rsmecVsZcd8HTYVuyxAb0ckvAcdDI/KTWHzRddyaiy10oDWlo4jFTlZB45/4TJGaA4sV/S8wPBrfjfcpcg4YCTWAYULFxfIC6KmmwZMQjlVc1bU4mk//pmG2wxyt88ospDu7l+FbiHtE72RisK9/6XBfYkPtFT9JtDawDFd3e/YE6Mf3yVLpmI8CN0Wu7PooG2u2w3DqZwvng1vm7dqGNTCwBSL2gn4aTflvAAAAAElFTkSuQmCC" />
          <span>Easy To Recall</span>
        </button>
        <button className="button grid medium"
          onClick={e => {
            e.stopPropagation()
            props.moveCardToBucket(props.front, 'mediumBucket')
          }}>
          <img alt="Difficult To Recall" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARoSURBVGhD7ZpbqFVFGMdPamZRJKZY2YUSUQrRhPBJTQqh6IqUlxcVxELBG/kiKCSKgj6EoVhJvkSlFXTFQkyxfDRCBFEwQbPIEsWwIq38/QYGNuvss9ess9feZ53D+cPvYdasmfn2mts33+yOfvVh3Qfz4S04CD/DZfgf/obf4Bh8BK/BdBgCldAwWAFHQIOLcgXehSfgBmi7hsNm+AOiUX7xPbAEHoO7ofaL3w7j4HlYD9/BNYjlf4CZ0JYfZCOL4ALY+H/wCTwDN0JR+WNXwo8Qf9B+8Ae3TPbCFxAb/AzGQxkaBPPgHFj3X+AHK10PwRmwkV/AHmiFboU3wJ62rbdhIJSiRyEOJVejO6HVch5dAtv8FAZDU3LonAcr/ACarrCAJoK9b9vvQbd7xjkRh1NTFTWhMRA/5BYfFJWr05dgBQegnT2R1WRw8jtvnvZBEbli+CPs2nbMiTy9Atpj7wz1QYpGwO9gwVatTt1RHCHbQypB7tgWcJ+okh4Eh9hVGO2DRtJ30u1wPJa12ZWpreBH3hlSDbQcfNG1u4q6F+wRe0bfrUt9D0Xnhr3YjDvunCzip30O2rgwpOrofvAFJ3pKxfeAO71l/EpOQn2mVDl0j4LlPa+shRTNAcvo99WVhyJf2B1S+doHvl/LKkiRm+tJyJZ/CfJ0B/wLHtrqfrg3wco8T+RJ587KsoZ8Cyl6GLJlxUNWimJPPhJSGR0CM6eFVGP5RT3d1Rohjt8UeQ7JlhU93xTpMvm+w6yTfgIzR4VUvjZBrREu2Y9DqhzCteX/BI8LKVoHllkTUhnFQMHNIZWvAbAYnCsfg8fbItJ/Ww3fgF94AqRqKWhrXUfSDMd9b9AC0N667opLqJm9QS+Dtm4LqYwugpkNd8yK6FXQ1o0hldFxMDN1wvWkXgdtXRZSGelfmflsSFVb0aV/KqQy2gBmGjyrsjy9xuOvYdpOmgFmHg6pfD0AhjrLwuX7FsiTPpp2ngqpOrISNyXDmHf5oIFuA11pKyyTXZAnN0Hf3RFSXeh98CVXhUZyM3TpczMsi68hb346rKKz2dCVehJ8yVhsEZe8XXJya99paBjsNjN6lrr1VZPzV9t0jXL1IviyTqRzoSqaC9p1FpL8QXslnvxS3epWy6inN2DaNNsHqfLgE6N7z/mgB+WHjRugC0JhRcfMqHhPhob0p7TDHhnpg+7Idd1KvIAZ64M2y9ss23d/Szm5dimPtNEH0y3wrqQdcjjFE6gbdCn+303wIVip86YlV2I1MkoSr/hs7wUoTfaMx8p4Jebky42/dkMusXF18iZgCrREXol5DW1DjltjsXU90ILSo4ibnXwFLb/OMERqDCzekf8D9pDru+t9ipwDroQ6gCcg/gAXlVnQVnkt9g4Y7oyGGLzQxdH59G8aRjuM0TqvjEJ6stsLv0IsI/pOBgZ79C8dnvE11F6p/SdEHp4n7NmpoDddKekxTwIjgAalvTTSWF1+l1OvLZwPXg/0qw+ro+M63qVuIYv7IT0AAAAASUVORK5CYII=" />
          <span>Difficult To Recall</span>
        </button>
        <button className="button grid difficult"
          onClick={e => {
            e.stopPropagation()
            props.moveCardToBucket(props.front, 'difficultBucket')
          }}>
          <img alt="Unable To Recall" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATASURBVGhD7ZpXqB1VFIav3YgSUjT2SFQSEgsqIj6oEUWNoJiIsbxEwQKKFX0RFBRFQR9ETbCLIglRE5QoKmLBgk8WQkAUVLBiw4a95fs2LBgmc2f2nDunJOSH72HPzJ7ZZ3b715oztlmbsPaGc+E+eBW+hJ/hf/gDvoV18CTcAMfC9jASmgpXwttgg9vyKzwGx8MWMHBNh9vgF4hG+cYfh0tgPuwOxTc+GebAaXATvAH/QNR/D06HgfwgH3IhfA8+/D94Ck6BbaCt/LFXwccQP+gl8Af3TfbCMxAPfBoOhC60NSyBL8B7/w6+sM41Fz4FH/IV2AP90I5wF9jTPut+2Ao60eEQQ8lu3xX6LefRDxA9vy1MSA6db8AbroAJ37CFDgKX8Hh2zz3jnIjh5BK5JQxa+0G8yNs90FauTs+CN3gFBtkTZR0Bv4HzpvXcdMXwRzixZ3hgyLoIbI+9M8UDOdoZvgMr9mt16kWx9C9LpQy5Y1vB1WKUNAvcX/4G506t9E7aDsdjV5tdl7oTfMkPpFKNroBR7I3QXmCP2DN6t3H1DrSdG/biROy4c7KNT1sDtvH8VKrQTPACJ3rOjfcE4w7r+JachHqmXDl014L1jVeuhxydDdZxe6iUQZEXrEylZr0IXl/kGsiRu/SHUK6/GJo0Df4Fg7bKF3cveDPjiSZp7rxZuSGvQ47mQbmu6CByFD15SCqV9Bp48phUqpdv1Oiu2Ahx/ObIOKRcV3S+OVoOXu8w20Cfgyf3SKVm3QrFRrhkHwe5cggX62tDDBdydCNY57pUKikSBZNSqVmayIvBubIKDG/bSP92LbwMvuGDIVeXgW2tNJKecNxvDDoPbG+lXXEJ9eTGoDCRS1OppIjIanfMEdHVYFtvSaWS3gdP5k64YeoOsK2Xp1JJ+itPnppKE9cOsA8cBgfAbtBVIiGCvpNTqaSbwZMmz3rVkaBDNdlWtWH+BM+B2cldoBcZvUb4a5p2A50AnnwzldrJrIeNLzbafeEDeAveBeP/SPPIX/Ag2GttpEez/kepVCGHgg83jekwyJHXFZN2NtYeNc6uMp463UVgavVPsI4O4VLITZW6CVrvnlQaR6ZdvMhVoUknQuS7zPteAG3suG77YYhecmNtisf9sWE2a63UAvAic7F1ltwHGtx47WrodbyrkyDs0SMeqJGT2+s+gdoe9GQ4S239ePK6u8FJmzsk6uQQfRSaAjrnr23TGjXqDPBi39JOHhgRnQO26zPI8oO+4Yj8cm11v2XWM9KnZ3kgVwY+zgEnYlcbZK/yxcYG+IIH2iqM2Y8wzNSQfsp22CM9Zz1dHr2J43K2BwYsv2b5fPe3nMh1XOmNwoNpC/xWMgg5nCICdYPuZHhvB0+AN+3bJ7GCzJKEW/B5C6Ez2TOGlbEL+6B9oWu5xMbq5JeAo6Av0hxqR3yQ41anW+lAW0pHEZudPA99/8RnitQcWHwj18W6PLq+u97nyDngSqgB1CHHD/Cr7pkwUO0PD4HpzmiIMYgWR/Pp3zTMdpijdV6ZhTSyMx75GqKO6J1MDA71Lx3G+DbUXin+E6IJ4wl79mgYxvfJWumYDwUzgCal/WhkY812uJz62cL54OeBzdqENTa2Hqp+cZgaDybOAAAAAElFTkSuQmCC" />
          <span>Unable To Recall</span>
        </button>
      </div>
    </div>
  )
}

Survey.propTypes = {
  moveCardToBucket: PropTypes.func.isRequired,
  front: PropTypes.string.isRequired,
}

export default Survey