export const updateField = (field, comp) => e => 
  comp.setState({ ...comp.state, [field]: e.target.value  });