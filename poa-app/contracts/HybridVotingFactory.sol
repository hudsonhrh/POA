// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./HybridVoting.sol"; 

contract HybridVotingFactory {
    
    event HybridVotingContractCreated(address indexed creator, address hybridVotingAddress, string POname);


    
    function createHybridVoting(
        address _ParticipationToken,
        address _DemocracyToken,
        address _nftMembership,
        string[] memory _allowedRoleNames,
        bool _quadraticVotingEnabled,
        uint256 _democracyVoteWeight,
        uint256 _participationVoteWeight,
        address _treasuryAddress,
        string memory POname
    ) public  returns (address){
        HybridVoting newHybridVoting = new HybridVoting(
            _ParticipationToken,
            _DemocracyToken,
            _nftMembership,
            _allowedRoleNames,
            _quadraticVotingEnabled,
            _democracyVoteWeight,
            _participationVoteWeight,
            _treasuryAddress
        );
        emit HybridVotingContractCreated(msg.sender, address(newHybridVoting), POname);
        return address(newHybridVoting);
    }

    
}
