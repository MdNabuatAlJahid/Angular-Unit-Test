import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totlaVotes = null;
    component.voteChanged.subscribe((tv) => (totlaVotes = tv));

    component.upVote();

    expect(totlaVotes).not.toBeNull();
  });
});
