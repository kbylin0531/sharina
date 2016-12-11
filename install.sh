USER=linzhv
GROUP=linzhv

mkdir Runtime
chown -R ${USER}.${GROUP} Runtime/
mkdir Data
chown -R ${USER}.${GROUP} Data/

mkdir Public/dynamic
chown -R ${USER}.${GROUP} Public/dynamic/