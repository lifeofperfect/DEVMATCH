import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import type { Profile } from './entities/profile.entity.js';
import type { CreateProfileDto } from './dto/create-profile.dto.js';
import type { UpdateProfileDto } from './dto/update-profile.dto.js';

@Injectable()
export class ProfilesService {
    private profiles: Profile[] = [
        {
            id: randomUUID(),
            name: 'Brianna Watts',
            description: `Looking for someone to merge with my heart. I am fullstack romantic who refactors my feelings until they pass all tests.
            Bonus points if you can debug my issues while we pair program over coffee.Lets commit to something beautiful together.`
        },
        {
            id: randomUUID(),
            name: 'Marcus Ellery',
            description:
                'I keep things running at three in the morning without complaining, and I would do the same for us. My love language is redundancy: backups, failovers, and texting good morning twice in case the first one did not deliver. Fair warning, I will monitor how you are doing constantly.',
        },
        {
            id: randomUUID(),
            name: 'Priya Raghunathan',
            description:
                'Fully normalized, no redundant exes cluttering up my tables. I am looking for a primary key, uniquely constrained and referenced everywhere. I am also ACID compliant, so whatever we start we finish together or we roll it back like it never happened.',
        },
        {
            id: randomUUID(),
            name: 'Dominic Vega',
            description:
                'Twelve years in and I can finally center a div, so you know I do not give up on hard things. Looking for someone responsive, mobile first but scales beautifully to a long weekend. I will notice that your padding is off by two pixels and I will love you anyway.',
        },
        {
            id: randomUUID(),
            name: 'Yuki Tanaka',
            description:
                'I build things people hold in their hands all day, so I care a great deal about how things feel. Low latency, smooth transitions, no jank: that is my standard for apps and for slow mornings. I ship on time and I have never once force quit a conversation.',
        },
        {
            id: randomUUID(),
            name: 'Adaeze Okonkwo',
            description:
                'I trained on a lot of bad data and I am finally starting to generalize. Not looking to overfit to the first person who is kind to me, I want something that holds up out of sample. My gradient descends toward you and my learning rate is patient.',
        },
        {
            id: randomUUID(),
            name: 'Ruth Kaplan',
            description:
                'I will spot the red flags before you finish typing them, but I would much rather be pleasantly surprised. Zero trust at first, full access once you have earned it, and I do mean full. I have never leaked a secret in my life, so tell me anything.',
        },
        {
            id: randomUUID(),
            name: 'Theo Brandt',
            description:
                'I break things for a living, so I know exactly how much care it takes to build something that holds. I will find the edge cases in us and then stay late to help fix them. I read the whole thing before I sign off, including the parts you hoped I would skip.',
        },
    ];

    findAll():Profile[] {
        return this.profiles;
    }

    findOne(id:string):Profile | undefined {
        return this.profiles.find((x):boolean=> x.id.toString() === id);
    }

    create(createProfile:CreateProfileDto):Profile {
        const createdProfile:Profile = {
            id: randomUUID(),
            ...createProfile
        }

        this.profiles.push(createdProfile);
        return createdProfile;
    }

    update(id:string, updateProfile: UpdateProfileDto):{} | Profile {
        const profile : Profile | undefined = this.profiles.find((profile):boolean=> profile.id === id);

        if(!profile){
            return {};
        }

        profile.name = updateProfile.name;
        profile.description = updateProfile.description

        return profile;
    }

    remove(id:string):void{
        const matchingProfile:number = this.profiles.findIndex((profile):boolean=> profile.id === id);

        if(matchingProfile > -1){
            this.profiles.splice(matchingProfile, 1)
        }else{
            throw new NotFoundException(`Profile with id ${id} not found`)
        }
    }
}
