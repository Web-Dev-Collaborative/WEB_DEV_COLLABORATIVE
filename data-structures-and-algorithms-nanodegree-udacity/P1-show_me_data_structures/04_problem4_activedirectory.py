class Group(object):
    def __init__(self, _name):
        self.name = _name
        self.groups = []
        self.users = []

    def add_group(self, group):
        self.groups.append(group)

    def add_user(self, user):
        self.users.append(user)

    def get_groups(self):
        return self.groups

    def get_users(self):
        return self.users

    def get_name(self):
        return self.name
		
def is_user_in_group(user, group):
    """
    Return True if user is in the group, False otherwise.
    Args:
      user(str): user name/id
      group(class:Group): group to check user membership against
    """
    if user in group.get_users():
        return True
    
    for group in group.get_groups():
        return is_user_in_group(user, group)
    
    return False
	
parent = Group("parent")
not_parent = Group("not_parent")
child = Group("child")
sub_child = Group("subchild")

sub_child.add_user("sub_child_user_1")
sub_child.add_user("sub_child_user_2")

child.add_user("child_user_1")
child.add_user("child_user_2")

parent.add_user("parent_1")
parent.add_user("parent_2")

not_parent.add_user("not_parent_1")

child.add_group(sub_child)
parent.add_group(child)

print ("Pass" if  (True == is_user_in_group("child_user_1", parent)) else "Fail")
print ("Pass" if  (False == is_user_in_group("child_orphan_1", parent)) else "Fail")
print ("Pass" if  (True == is_user_in_group("child_user_1", child)) else "Fail")
print ("Pass" if  (False == is_user_in_group("child", child)) else "Fail")
print ("Pass" if  (True == is_user_in_group("sub_child_user_1", child)) else "Fail")
print ("Pass" if  (False == is_user_in_group("sub_child_user_1", not_parent)) else "Fail")