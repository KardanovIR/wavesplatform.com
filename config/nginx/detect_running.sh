for name in $(docker ps --format='{{.Names}}')
do
	if [[ $name == *"node1"* ]]; then
		old_backend="node1";
		break;
	fi
	if [[ $name == *"node2"* ]]; then
		old_backend="node2";
		break;
	fi
done


if [[ -z $old_backend ]]; then
	echo "No backend currently running.";
	exit 1;
fi

echo $old_backend;