import { Injectable } from '@nestjs/common';

@Injectable()
export class UserServerService {
    findAll(){
        return [
            {ss:'dd'}
        ]
    }
}
