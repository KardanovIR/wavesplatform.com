pages=( '' 'product' 'company' 'developers' 'get-waves' '404' 'mining' 'leasing' );


for i in "${pages[@]}"
do
	curl -H "Cache-Control:no-cache" https://wavesplatform.com/$i > /dev/null;
done