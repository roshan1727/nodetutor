using { bpadb } from '../db/bpaInfo';

service bpaInfoService {
    entity bpaInfo as projection on bpadb.userinfo;
}