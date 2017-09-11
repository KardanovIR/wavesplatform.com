if ! old_backend=$(source "${BASH_SOURCE%/*}/detect_running.sh"); then
	echo $old_backend;
	exit $?;
fi

new_backend=$([[ $old_backend == "node1" ]] && echo "node2" || echo "node1");

echo "Old backend: $old_backend";
echo "New backend: $new_backend";


docker-compose build static;
docker build $new_backend;


docker-compose up -d static;
docker-compose up -d --scale $new_backend=2 $new_backend;
docker-compose up -d --scale $old_backend=0 $old_backend;


echo "UPDATE FINISHED";