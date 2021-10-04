import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totlaVotes = 0;
    component.voteChanged.subscribe((tv) => (totlaVotes = tv));

    component.upVote();

    expect(totlaVotes).toBe(1);
  });
});
