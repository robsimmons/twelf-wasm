// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser} from "@lezer/lr"
const spec_Identifier = {__proto__:null,"->":28, type:30}
export const parser = LRParser.deserialize({
  version: 14,
  states: "tQYQPOOOOQO'#Cd'#CdOOQO'#Ce'#CeOOQO'#Cf'#CfQYQPOOOOQO-E6d-E6d",
  stateData: "t~O]OSPOS~ORROSROTROUROVRO^PO_QO~OTU~",
  goto: "fZPPPPPPPP[[`TROSQSORTS",
  nodeNames: "⚠ LineComment File Colon Period FVar Identifier Pragma Arrow Type",
  maxTerm: 15,
  skippedNodes: [0,1],
  repeatNodeCount: 1,
  tokenData: "&x~RgXY!jYZ!j]^!jpq!jqr!{st!{tu!{uv$Vvw!{wx!{z}!{}!O!{!O!P%b!P![!{![!]%g!]!c!{!c!}%l#Q#o!{#p#q!{#r#s!{$g;'S!{;'S;=`$P<%lO!{~!oS]~XY!jYZ!j]^!jpq!j~#Q_U~qr!{st!{tu!{vw!{wx!{z}!{}!O!{!P![!{!]!}!{#Q#o!{#p#q!{#r#s!{$g;'S!{;'S;=`$P<%lO!{~$SP;=`<%l!{~$YTYZ$ipq$nuv$n!c!}%V#T#o%V~$nOP~~$sSP~OY$nZ;'S$n;'S;=`%P<%lO$n~%SP;=`<%l$n~%[QV~!c!}%V#T#o%V~%gOS~~%lOR~~%s_T~U~qr%lst%ltu%lvw%lwx%lz}%l}!O%l!P![%l!]!}%l#Q#o%l#p#q%l#r#s%l$g;'S%l;'S;=`&r<%lO%l~&uP;=`<%l%l",
  tokenizers: [0],
  topRules: {"File":[0,2]},
  specialized: [{term: 6, get: (value) => spec_Identifier[value] || -1}],
  tokenPrec: 33
})
