# Pourquoi n’a-t-on pas voulu d’un label Européen sur l’IA de confiance?
Le texte de règlement européen sur l’IA (AI Act)  aurait pu créer un label « IA responsable »  à l’échelle européenne, qui serait décerné par des autorités étatiques. Pourquoi cette option législative a-t-elle été écartée ? Dans le cadre d'une enquête menée chez Orange Labs on se propose de répondre à cette question en analysant le feedback des acteurs du marché. On utilisera pour cela la librairie [scattertext](https://github.com/JasonKessler/scattertext) à travers l'interface [Cortext](https://www.cortext.net/projects/cortext-manager/).
## 1/ Scrapping  
On récupère les réponses à la consultation publique (pdfs non structurés) à partir du site de l'Union européenne.
## 2/ EDA-Nettoyage
* Extraction du texte des fichiers pdf
* Extraction des paragraphes concernant la proposition de label (par regex)
* Normalisation pour traitement NLP (stop words...)
## 3/ Analyse des arguments pour/contre
* a) Analyse de sentiment
* b) Analyse par contraste des termes saillants entre feedback positif et négatif
