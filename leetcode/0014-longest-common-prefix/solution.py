class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # If no strings in list return
        if not strs:
            return ""
        
        # Save starting string as full prefix
        prefix = strs[0]
        
        for i in strs[1:]:
            while not i.startswith(prefix):
                # Save prefix to be all except last char
                prefix = prefix[:-1]
                # If nothing left return empty string
                if not prefix:
                    return ""
        
        return prefix
